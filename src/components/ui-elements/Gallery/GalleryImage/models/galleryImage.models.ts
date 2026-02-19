import { ImageSrcSet } from '../../../../../shared/models/image.models';

export type GalleryImageProps = {
	src: ImageSrcSet;
	alt?: string;
	onClick?: () => void;
};

export type GalleryImageType = GalleryImageProps;
