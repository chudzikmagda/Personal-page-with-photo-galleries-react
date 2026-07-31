import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const GALLERIES = [
	{ key: 'city', path: 'city' },
	{ key: 'colorLandscapes', path: 'landscapes/color' },
	{ key: 'bwLandscapes', path: 'landscapes/black-and-white' },
	{ key: 'projectsWomensIceHockeyCracovia', path: 'projects/womens-ice-hockey-cracovia' }
];
const GALLERY_IMAGES_DIR = path.join(dirname, 'public/images/galleries');
const GALLERY_METADATA_OUTPUT_DIR = path.join(dirname, 'src/shared/metadata');

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

const toPascalCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const getMetadataVarName = (galleryKey) => `galleryMetadata${toPascalCase(galleryKey)}`;

const getMetadataFileName = (galleryKey) => `galleryMetadata.${galleryKey}.ts`;

const getPreferredVariant = (variants) => {
	return variants.fullsize || variants['1024w'] || variants['768w'] || variants['480w'] || variants.lowQuality || Object.values(variants)[0];
};

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
	const galleryItems = Object.values(groupedFiles).map((item) => {
		const preferredVariant = getPreferredVariant(item.variants);

		return {
			...item,
			width: preferredVariant?.width ?? 0,
			height: preferredVariant?.height ?? 0
		};
	});

	return sort(galleryItems);
};

const getGalleryMetadata = async () => {
	const outputData = {};
	for (const gallery of GALLERIES) {
		outputData[gallery.key] = await scanFolder(gallery.path);
	}
	return outputData;
};

const writeGalleryMetadataFile = (galleryKey, galleryItems) => {
	const varName = getMetadataVarName(galleryKey);
	const outputPath = path.join(GALLERY_METADATA_OUTPUT_DIR, getMetadataFileName(galleryKey));
	const outputContent = `// Auto-generated gallery image metadata\nimport { GalleryItem } from '../types/gallery.types';\n\nexport const ${varName}: GalleryItem[] = ${JSON.stringify(
		galleryItems,
		null,
		2
	)};\n`;

	fs.writeFileSync(outputPath, outputContent);
};

const writeMetadataIndexFile = () => {
	const imports = GALLERIES.map((gallery) => {
		const varName = getMetadataVarName(gallery.key);
		const fileName = getMetadataFileName(gallery.key).replace('.ts', '');
		return `import { ${varName} } from './${fileName}';`;
	}).join('\n');

	const exports = `export {\n${GALLERIES.map((gallery) => `\t${getMetadataVarName(gallery.key)}`).join(',\n')}\n};`;

	const indexContent = `// Auto-generated gallery metadata index\n${imports}\n\n${exports}\n`;

	fs.writeFileSync(path.join(GALLERY_METADATA_OUTPUT_DIR, 'index.ts'), indexContent);
};

const removeLegacyCombinedFile = () => {
	const legacyFilePath = path.join(GALLERY_METADATA_OUTPUT_DIR, 'galleryImageMetadata.ts');
	if (fs.existsSync(legacyFilePath)) {
		fs.unlinkSync(legacyFilePath);
	}
};

const generateGalleryMetadata = async () => {
	try {
		logMessage('log', '🚀 Starting metadata generation...');

		const outputData = await getGalleryMetadata();
		const outputDirectory = GALLERY_METADATA_OUTPUT_DIR;

		if (!fs.existsSync(outputDirectory)) fs.mkdirSync(outputDirectory, { recursive: true });

		GALLERIES.forEach((gallery) => {
			writeGalleryMetadataFile(gallery.key, outputData[gallery.key]);
		});

		writeMetadataIndexFile();
		removeLegacyCombinedFile();

		logMessage('log', '✅ Done! Metadata saved as per-gallery files');
	} catch (err) {
		logMessage('error', `Critical error: ${err}`);
	}
};

generateGalleryMetadata();
