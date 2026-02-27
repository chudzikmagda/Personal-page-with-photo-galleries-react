import React, { useState } from 'react';
import Image from '../Image/Image';
import styles from './ImageWithPlaceholder.module.scss';
import { ImageWithPlaceholderProps } from './models/imageWithPlaceholder.models';

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({ imageSources, imageStyles, alt, loading, onLoad, onTouchStart, onTouchEnd }) => {
	const [showPlaceholder, setShowPlaceholder] = useState(true);

	const handleLoad = (): void => {
		if (onLoad) onLoad();
		setShowPlaceholder(false);
	};

	return (
		<>
			<Image
				src={imageSources.lowQualitySrc}
				className={styles['placeholder-image']}
				style={{ display: showPlaceholder ? 'block' : 'none' }}
				alt={alt ?? ''}
			/>
			<Image
				src={imageSources.fullSizeSrc}
				srcSet={imageSources.srcSet}
				className={imageStyles?.className ? `${imageStyles.className} ${styles['fullsize-image']}` : styles['fullsize-image']}
				style={{ ...imageStyles?.style, display: showPlaceholder ? 'none' : 'block' }}
				alt={alt ?? ''}
				loading={loading}
				onLoad={handleLoad}
				onTouchStart={onTouchStart}
				onTouchEnd={onTouchEnd}
			/>
		</>
	);
};

export default ImageWithPlaceholder;
