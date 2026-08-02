import { GalleryImageType } from '../Gallery/components/GalleryImage/galleryImage.types';

export type LightboxProps = {
	currentIndex: number;
	images: GalleryImageType[];
	closeImage: (state: boolean) => void;
};
