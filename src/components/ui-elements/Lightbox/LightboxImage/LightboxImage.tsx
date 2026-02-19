import React, { useState } from 'react';
import Image from '../../Image/Image';
import styles from './LightboxImage.module.scss';
import { LightboxImageProps, SWIPE_DIRECTION } from './models/lightboxImage.models';

const LightboxImageComponent: React.FC<LightboxImageProps> = ({ src, alt, onSwipe }) => {
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
			src={src.fullsize}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			className={styles['lightbox-image']}
			style={{ width: 'auto', height: 'auto' }}
			alt={alt ?? 'Lightbox image'}
		/>
	);
};

export default LightboxImageComponent;
