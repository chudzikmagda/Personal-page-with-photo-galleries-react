import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const GALLERIES = [
	{ key: 'city', path: 'city' },
	{ key: 'colorLandscapes', path: 'landscapes/color' },
	{ key: 'bwLandscapes', path: 'landscapes/black-and-white' }
];
const GALLERY_IMAGES_DIR = path.join(dirname, 'public/images/galleries');
const GALLERY_METADATA_OUTPUT_FILE = path.join(dirname, 'src/shared/metadata/galleryImageMetadata.ts');

const getRelativePath = (fullPath) => {
	const normalized = fullPath.replace(/\\/g, '/');
	const imagesIndex = normalized.indexOf('/images/');
	return imagesIndex !== -1 ? normalized.substring(imagesIndex) : fullPath;
};

const createAltFromFilename = (filename) => {
	return filename
		.replace(/\.webp$/i, '')
		.replace(/-\d+(w|k|lowQuality)?.*$/, '')
		.replace(/-/g, ' ')
		.trim();
};

const isFile = (path) => fs.statSync(path).isFile();

const isWebpFile = (filename) => /\.webp$/i.test(filename);

const logMessage = (type, message) => {
	const prefix = {
		log: '',
		warn: '⚠️',
		error: '❌'
	};
	console[type](`${prefix[type]}  ${message}`);
};

const sort = (items) => items.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

const assignVariant = (file, id, imageData, groupedFiles) => {
	switch (true) {
		case file.includes('-480w'):
			groupedFiles[id].variants['480w'] = imageData;
			break;
		case file.includes('-768w'):
			groupedFiles[id].variants['768w'] = imageData;
			break;
		case file.includes('-1024w'):
			groupedFiles[id].variants['1024w'] = imageData;
			break;
		case file.includes('-lowQuality'):
			groupedFiles[id].variants.lowQuality = imageData;
			break;
		default:
			groupedFiles[id].variants.fullsize = imageData;
			break;
	}
};

const scanFolder = async (relativeFolderPath) => {
	const targetDir = path.join(GALLERY_IMAGES_DIR, relativeFolderPath);
	if (!fs.existsSync(targetDir)) {
		logMessage('warn', `Folder does not exist: ${targetDir}`);
		return {};
	}

	const files = fs.readdirSync(targetDir);
	const groupedFiles = {};

	for (const file of files) {
		const filePath = path.join(targetDir, file);

		if (isFile(filePath) && isWebpFile(file)) {
			try {
				const metadata = await sharp(filePath).metadata();

				const idMatch = file.match(/^(.*?-\d+)/);
				const id = idMatch ? idMatch[1] : file.split('.')[0];

				if (!groupedFiles[id]) {
					groupedFiles[id] = {
						id,
						alt: createAltFromFilename(file),
						variants: {}
					};
				}

				assignVariant(
					file,
					id,
					{
						src: getRelativePath(filePath),
						width: metadata.width,
						height: metadata.height,
						aspectRatio: +(metadata.width / metadata.height).toFixed(2)
					},
					groupedFiles
				);
			} catch (err) {
				logMessage('warn', `Sharp error for file ${file}: ${err.message}`);
			}
		}
	}
	return sort(Object.values(groupedFiles));
};

const getGalleryMetadata = async () => {
	const outputData = {};
	for (const gallery of GALLERIES) {
		outputData[gallery.key] = await scanFolder(gallery.path);
	}
	return outputData;
};

const generateGalleryMetadata = async () => {
	try {
		logMessage('log', '🚀 Starting metadata generation...');

		const outputData = await getGalleryMetadata();
		const outputDirectory = path.dirname(GALLERY_METADATA_OUTPUT_FILE);

		if (!fs.existsSync(outputDirectory)) fs.mkdirSync(outputDirectory, { recursive: true });

		const galleryMetadataTs = `// Auto-generated gallery image metadata\nimport { GalleryMetadata } from '../models/gallery.models';\n\nexport const galleryMetadata: GalleryMetadata = ${JSON.stringify(
			outputData,
			null,
			2
		)};\n`;

		fs.writeFileSync(GALLERY_METADATA_OUTPUT_FILE, galleryMetadataTs);

		logMessage('log', '✅ Done! Metadata saved');
	} catch (err) {
		logMessage('error', `Critical error: ${err}`);
	}
};

generateGalleryMetadata();
