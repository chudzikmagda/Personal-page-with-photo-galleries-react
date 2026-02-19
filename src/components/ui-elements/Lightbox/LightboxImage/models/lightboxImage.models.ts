import { ImageSrcSet } from '../../../../../shared/models/image.models';

export enum SWIPE_DIRECTION {
	'LEFT' = 'left',
	'RIGHT' = 'right'
}

export type LightboxImageProps = {
	src: ImageSrcSet;
	alt?: string;
	onClick?: () => void;
	onSwipe?: (direction: SWIPE_DIRECTION) => void;
};
