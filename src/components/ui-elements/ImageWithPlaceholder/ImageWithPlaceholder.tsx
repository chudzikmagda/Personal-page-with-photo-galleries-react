import React, { useEffect, useRef, useState } from 'react';

import Image from '../Image/Image';
import { ImageLoading } from '../Image/image.types';
import styles from './imageWithPlaceholder.module.scss';
import { ImageWithPlaceholderProps } from './imageWithPlaceholder.types';

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({ imageSources, imageStyles, alt, loading, onLoad, onTouchStart, onTouchEnd }) => {
	const placeholderRef = useRef<HTMLImageElement | null>(null);
	const hasPlaceholder = Boolean(imageSources.lowQualitySrc);
	const [showPlaceholder, setShowPlaceholder] = useState(true);
	const [shouldRenderFullImage, setShouldRenderFullImage] = useState(loading !== ImageLoading.Lazy || !hasPlaceholder);

	useEffect(() => {
		if (loading !== ImageLoading.Lazy || shouldRenderFullImage) return;

		const placeholderNode = placeholderRef.current;
		if (!placeholderNode) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setShouldRenderFullImage(true);
						observer.disconnect();
					}
				});
			},
			{ rootMargin: '300px 0px' }
		);

		observer.observe(placeholderNode);

		return () => {
			observer.disconnect();
		};
	}, [loading, shouldRenderFullImage]);

	const handleLoad = (): void => {
		if (onLoad) onLoad();
		setShowPlaceholder(false);
	};

	return (
		<div className={styles['image-wrapper']}>
			{hasPlaceholder && showPlaceholder && (
				<Image
					ref={placeholderRef}
					src={imageSources.lowQualitySrc}
					className={
						imageStyles?.placeholderClassName
							? `${imageStyles.placeholderClassName} ${styles['placeholder-image']}`
							: styles['placeholder-image']
					}
					style={{
						...imageStyles?.style,
						pointerEvents: 'none'
					}}
					alt=""
					aria-hidden="true"
				/>
			)}
			{shouldRenderFullImage && (
				<Image
					src={imageSources.fullSizeSrc}
					srcSet={imageSources.srcSet}
					sizes={imageSources.sizes}
					className={imageStyles?.className ? `${imageStyles.className} ${styles['fullsize-image']}` : styles['fullsize-image']}
					style={{ ...imageStyles?.style, opacity: hasPlaceholder && showPlaceholder ? 0 : 1 }}
					alt={alt ?? ''}
					loading={loading}
					onLoad={handleLoad}
					onTouchStart={onTouchStart}
					onTouchEnd={onTouchEnd}
				/>
			)}
		</div>
	);
};

export default ImageWithPlaceholder;
