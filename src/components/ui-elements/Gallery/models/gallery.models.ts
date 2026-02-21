import { GalleryImageType } from '../GalleryImage/models/galleryImage.models';

export type GalleryRows = GalleryImageType[][];

export type GalleryRowParams = {
	image: GalleryImageType;
	currentRow: GalleryImageType[];
	currentRowWidth: number;
	galleryRows: GalleryRows;
	containerWidth: number;
};

export type GalleryCurrentRow = Pick<GalleryRowParams, 'currentRow' | 'currentRowWidth'>;

export type GalleryProps = {
	heading: string;
	images: GalleryImageType[];
};

export const GALLERY_ROW_HEIGHT = 250;
export const GALLERY_GAP = 16;
