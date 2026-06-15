import { ImageVariants } from './image.types';

export interface GalleryItem {
	id: string;
	alt: string;
	variants: ImageVariants;
	width: number;
	height: number;
}

export interface GalleryMetadata {
	city: GalleryItem[];
	colorLandscapes: GalleryItem[];
	bwLandscapes: GalleryItem[];
	projectsWomensIceHockeyCracovia: GalleryItem[];
}
