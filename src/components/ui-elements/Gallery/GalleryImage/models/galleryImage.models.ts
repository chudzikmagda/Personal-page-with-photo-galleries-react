import { ImageVariants } from '../../../../../shared/models/image.models';

export interface GalleryImageType {
	alt: string;
	variants: ImageVariants;
	srcSet?: string;
}
