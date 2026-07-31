import { Image, ImageDimension, ImageVariants } from '../types/image.types';

const getSrcSetSize = (key: ImageDimension, value: Image): string | undefined => {
	if (key === ImageDimension.LOW_QUALITY) return undefined;
	if (value.width > 0) return `${value.width}w`;
	if (key === ImageDimension.FULLSIZE) return undefined;
	return key;
};

export const createSrcSet = (variants: ImageVariants): string => {
	const srcSetParts: string[] = [];
	const uniqueEntries = new Set<string>();
	Object.entries(variants).forEach(([key, value]: [key: string, value: Image]) => {
		const size: string | undefined = getSrcSetSize(key as ImageDimension, value);
		if (size && value) {
			const srcSetEntry = `${value.src} ${size}`;
			if (!uniqueEntries.has(srcSetEntry)) {
				uniqueEntries.add(srcSetEntry);
				srcSetParts.push(srcSetEntry);
			}
		}
	});
	return srcSetParts.join(', ');
};
