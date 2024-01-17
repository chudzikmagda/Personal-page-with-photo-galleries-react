import { Image, SrcSet } from '../../Gallery/models/GalleryModels';

export type LightboxProps = {
	currentIndex: number;
	images: Image[];
	closeImage: (state: boolean) => void;
};

export type ImageProps = {
	src: SrcSet;
	alt?: string;
	onClick?: () => void;
	onSwipe?: (direction: SWIPE_DIRECTION) => void;
};

export enum SWIPE_DIRECTION {
	'LEFT' = 'left',
	'RIGHT' = 'right'
}
