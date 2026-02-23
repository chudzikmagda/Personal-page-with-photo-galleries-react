import { GalleryImageType } from '../../Gallery/GalleryImage/models/galleryImage.models';

export type LightboxProps = {
	currentIndex: number;
	images: GalleryImageType[];
	closeImage: (state: boolean) => void;
};
