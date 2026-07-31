import React, { useState } from 'react';

import { ImageDimension } from '../../../../../shared/types/image.types';
import { createSrcSet } from '../../../../../shared/utils/imageUtils';
import { ImageLoading } from '../../../Image/image.types';
import ImageWithPlaceholder from '../../../ImageWithPlaceholder/ImageWithPlaceholder';
import styles from './lightboxImage.module.scss';
import { LightboxImageProps, SWIPE_DIRECTION } from './lightboxImage.types';

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
		<div
			className={styles['lightbox-image-container']}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
				height: '100%'
			}}>
			<ImageWithPlaceholder
				imageSources={{
					lowQualitySrc: variants[ImageDimension.LOW_QUALITY]?.src,
					fullSizeSrc: variants[ImageDimension.FULLSIZE]?.src,
					srcSet: createSrcSet(variants),
					sizes: '100vw'
				}}
				alt={alt ?? 'Magda Chudzik photography'}
				loading={ImageLoading.Eager}
				imageStyles={{
					className: styles['lightbox-image'],
					placeholderClassName: styles['lightbox-image__lowquality'],
					style: {
						maxWidth: variants.fullsize.width ? `${variants.fullsize.width}px` : '100%',
						maxHeight: variants.fullsize.height ? `${variants.fullsize.height}px` : '100%'
					}
				}}
				onTouchStart={handleTouchStart}
				onTouchEnd={handleTouchEnd}
			/>
		</div>
	);
};

export default LightboxImageComponent;
