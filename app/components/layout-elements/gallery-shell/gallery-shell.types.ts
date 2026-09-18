import type { GalleryItem } from '~/shared/types/gallery.types';

export enum GalleryShellBaseKey {
  CITY = 'CityView',
  BW_LANDSCAPE = 'BwLandscapeView',
  COLOR_LANDSCAPE = 'ColorLandscapeView',
}

export type GalleryShellProps = {
  baseKey: GalleryShellBaseKey;
  images: GalleryItem[];
  wrapperClassName: string;
};
