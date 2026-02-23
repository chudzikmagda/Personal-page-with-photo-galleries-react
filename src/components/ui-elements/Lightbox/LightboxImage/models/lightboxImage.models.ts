import { ImageVariants } from '../../../../../shared/models/image.models';

export enum SWIPE_DIRECTION {
	'LEFT' = 'left',
	'RIGHT' = 'right'
}

export type LightboxImageProps = {
	variants: ImageVariants;
	srcSet?: string;
	alt?: string;
	onClick?: () => void;
	onSwipe?: (direction: SWIPE_DIRECTION) => void;
};
