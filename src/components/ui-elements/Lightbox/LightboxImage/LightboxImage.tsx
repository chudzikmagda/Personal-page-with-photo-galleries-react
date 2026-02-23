import React, { useState } from 'react';
import { createSrcSet } from '../../../../shared/utils/imageUtils';
import Image from '../../Image/Image';
import styles from './LightboxImage.module.scss';
import { LightboxImageProps, SWIPE_DIRECTION } from './models/lightboxImage.models';

const LightboxImageComponent: React.FC<LightboxImageProps> = ({ variants, alt, onSwipe }) => {
	const [startClientX, setStartClientX] = useState(0);
	const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
		setStartClientX(e.touches[0].clientX);
	};

	const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
		const endClientX = e.changedTouches[0].clientX;
		const deltaX = endClientX - startClientX;
		const minSwipeDistance = 50;

		if (onSwipe) {
			if (deltaX > minSwipeDistance) {
				onSwipe(SWIPE_DIRECTION.RIGHT);
			} else if (deltaX < -minSwipeDistance) {
				onSwipe(SWIPE_DIRECTION.LEFT);
			}
		}
	};

	return (
		<Image
			src={variants.fullsize.src}
			srcSet={createSrcSet(variants)}
			className={styles['lightbox-image']}
			style={{
				width: 'auto',
				height: 'auto',
				maxWidth: `${variants.fullsize.width}px`,
				maxHeight: `${variants.fullsize.height}px`
			}}
			alt={alt ?? 'Magda Chudzik image'}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		/>
	);
};

export default LightboxImageComponent;
