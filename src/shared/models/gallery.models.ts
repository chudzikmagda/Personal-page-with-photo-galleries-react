import { ImageVariants } from './image.models';

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
