import { Image } from '../../Gallery/models/GalleryModels';

export type LightboxProps = {
	currentIndex: number;
	images: Image[];
	closeImage: (state: boolean) => void;
};

export type ImageProps = {
	alt?: string;
	src: string;
};
