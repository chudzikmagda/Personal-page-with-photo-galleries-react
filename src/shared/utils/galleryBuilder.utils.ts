import { GalleryImageType } from '../../components/ui-elements/Gallery/models/gallery.models';
import { ImageSrcSet } from '../models/image.models';

const getFileName = (path: string): string => {
	return path.split('/').pop() ?? '';
};

const extractId = (file: string): string | null => {
	const match = file.match(/-(\d+)(?:-|\.)/);
	return match ? match[1] : null;
};

const assignUrlByVariant = (file: string, url: string, id: string, imagesMap: Record<string, Partial<ImageSrcSet>>): void => {
	switch (true) {
		case file.includes('-480w'):
			imagesMap[id].w480 = url;
			break;
		case file.includes('-768w'):
			imagesMap[id].w768 = url;
			break;
		case file.includes('-1024w'):
			imagesMap[id].w1024 = url;
			break;
		case file.includes('-lowQuality'):
			imagesMap[id].lowQuality = url;
			break;
		default:
			imagesMap[id].fullsize = url;
			break;
	}
};

export const galleryBuilder = (images: Record<string, string>, alt: string): GalleryImageType[] => {
	const imagesMap: Record<string, Partial<ImageSrcSet>> = {};

	Object.entries(images).forEach(([path, url]) => {
		const fileName: string = getFileName(path);
		const id: string | null = extractId(fileName);

		if (!id) return;
		if (!imagesMap[id]) imagesMap[id] = {};

		assignUrlByVariant(fileName, url, id, imagesMap);
	});

	return Object.keys(imagesMap)
		.sort((a, b) => Number(a) - Number(b))
		.map((id) => {
			return {
				src: {
					fullsize: imagesMap[id].fullsize ?? '',
					w480: imagesMap[id].w480 ?? '',
					w768: imagesMap[id].w768 ?? '',
					w1024: imagesMap[id].w1024 ?? '',
					lowQuality: imagesMap[id].lowQuality ?? ''
				},
				alt
			};
		});
};
