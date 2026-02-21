import { ImageSrcSet } from '../../../../../shared/models/image.models';

export type GalleryImageProps = {
	src: ImageSrcSet;
	alt?: string;
	onClick?: () => void;
};

export type GalleryImageType = Omit<GalleryImageProps, 'onClick'> & {
	width?: number;
	height?: number;
	aspectRatio?: number;
};
