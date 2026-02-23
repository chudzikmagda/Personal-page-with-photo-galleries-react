import { Image, ImageDimension, ImageVariants } from '../models/image.models';

const getSrcSetSize = (key: ImageDimension): string | undefined => {
	if (key === ImageDimension.LOW_QUALITY) return undefined;
	if (key === ImageDimension.FULLSIZE) return '1600w';
	return key;
};

export const createSrcSet = (variants: ImageVariants): string => {
	const srcSetParts: string[] = [];
	Object.entries(variants).forEach(([key, value]: [key: string, value: Image]) => {
		const size: string | undefined = getSrcSetSize(key as ImageDimension);
		size && value && srcSetParts.push(`${value.src} ${size}`);
	});
	return srcSetParts.join(', ');
};
