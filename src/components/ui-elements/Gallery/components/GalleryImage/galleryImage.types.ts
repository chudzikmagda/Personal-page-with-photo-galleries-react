import { ImageVariants } from '../../../../../shared/types/image.types';

export interface GalleryImageType {
	alt: string;
	variants: ImageVariants;
	srcSet?: string;
}
