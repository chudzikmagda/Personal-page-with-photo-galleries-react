import { ImageVariants } from '../../../../../shared/types/image.types';
import { ImageLoading } from '../../../Image/image.types';

export interface GalleryImageType {
	id: string;
	alt: string;
	variants: ImageVariants;
	loading?: ImageLoading;
	srcSet?: string;
	sizes?: string;
}
