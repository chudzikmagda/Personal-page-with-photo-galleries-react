import React, { useState } from 'react';
import { ImageProps, SWIPE_DIRECTION } from '../models/LightboxModels';
import styles from './LightboxImage.module.scss';

const LightboxImageComponent: React.FC<ImageProps> = ({ src, alt, onSwipe }) => {
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
		<img
			src={src.fullsize}
			onTouchStart={(e) => handleTouchStart(e)}
			onTouchEnd={(e) => handleTouchEnd(e)}
			className={styles['lightbox-image']}
			alt={alt}
		/>
	);
};

export default LightboxImageComponent;
