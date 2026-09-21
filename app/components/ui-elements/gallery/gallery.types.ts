import type { GalleryImageType } from './components/gallery-image/gallery-image.types';

export type GalleryRows = GalleryImageType[][];

export type GalleryRowParams = {
  image: GalleryImageType;
  currentRow: GalleryImageType[];
  currentRowWidth: number;
  galleryRows: GalleryRows;
  containerWidth: number;
  targetRowHeight: number;
};

export type GalleryCurrentRow = Pick<GalleryRowParams, 'currentRow' | 'currentRowWidth'>;

export type GalleryProps = {
  heading: string;
  images: GalleryImageType[];
};

export const GALLERY_ROW_HEIGHT = 250;
export const GALLERY_GAP = 16;
export const GALLERY_FALLBACK_WIDTH = 1600;
