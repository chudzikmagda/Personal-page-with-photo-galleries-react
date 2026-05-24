import { ImageVariants } from './image.types';

export interface GalleryItem {
	id: string;
	alt: string;
	variants: ImageVariants;
}

export interface GalleryMetadata {
	city: GalleryItem[];
	colorLandscapes: GalleryItem[];
	bwLandscapes: GalleryItem[];
}
