import { ImageVariants } from '../../../../../shared/types/image.types';

export interface GalleryImageType {
	id: string;
	alt: string;
	variants: ImageVariants;
	srcSet?: string;
}
