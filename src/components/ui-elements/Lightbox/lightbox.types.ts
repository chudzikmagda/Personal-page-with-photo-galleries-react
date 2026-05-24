import { GalleryImageType } from '../../Gallery/components/GalleryImage/types/galleryImage.types';

export type LightboxProps = {
	currentIndex: number;
	images: GalleryImageType[];
	closeImage: (state: boolean) => void;
};
