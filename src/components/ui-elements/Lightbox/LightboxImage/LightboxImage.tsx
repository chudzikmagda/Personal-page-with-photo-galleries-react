import React, { useState } from 'react';
import { createSrcSet } from '../../../../shared/utils/imageUtils';
import styles from './LightboxImage.module.scss';
import { LightboxImageProps, SWIPE_DIRECTION } from './models/lightboxImage.models';
import ImageWithPlaceholder from '../../ImageWithPlaceholder/ImageWithPlaceholder';
import { ImageDimension } from '../../../../shared/models/image.models';

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
					srcSet: createSrcSet(variants)
				}}
				alt={alt ?? 'Magda Chudzik photography'}
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
