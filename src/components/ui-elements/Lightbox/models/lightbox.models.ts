import { GalleryImageType } from '../../Gallery/GalleryImage/models/GalleryImageModels';

export type LightboxProps = {
	currentIndex: number;
	images: GalleryImageType[];
	closeImage: (state: boolean) => void;
};
