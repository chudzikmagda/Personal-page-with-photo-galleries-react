import { GalleryItem } from '../../../shared/types/gallery.types';

export enum GalleryShellBaseKey {
	CITY = 'CityPage',
	BW_LANDSCAPE = 'BwLandscapePage',
	COLOR_LANDSCAPE = 'ColorLandscapePage'
}

export type GalleryShellProps = {
	baseKey: GalleryShellBaseKey;
	image: string;
	images: GalleryItem[];
	url: string;
	wrapperClassName: string;
};
