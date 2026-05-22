import { GalleryItem } from '../../../shared/types/gallery.types';

export enum GalleryPageBaseKey {
	CITY = 'CityPage',
	BW_LANDSCAPE = 'BwLandscapePage',
	COLOR_LANDSCAPE = 'ColorLandscapePage'
}

export type GalleryPageProps = {
	baseKey: GalleryPageBaseKey;
	images: GalleryItem[];
	wrapperClassName: string;
};
