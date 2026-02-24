import React, { useState } from 'react';
import Image from '../Image/Image';
import styles from './ImageWithPlaceholder.module.scss';
import { ImageWithPlaceholderProps } from './models/imageWithPlaceholder.models';

const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({ imageSources, imageStyles, alt, loading, onLoad, onTouchStart, onTouchEnd }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleLoad = () => {
		setIsLoaded(true);
		if (onLoad) onLoad();
	};

	return (
		<>
			<div className={styles['image-container']}>
				<Image
					src={imageSources.lowQualitySrc}
					className={
						imageStyles?.placeholderClassName
							? `${imageStyles.placeholderClassName} ${styles['placeholder-image']}`
							: styles['placeholder-image']
					}
					alt={alt ?? ''}
					style={{ ...imageStyles?.style, position: 'absolute', opacity: isLoaded ? 0 : 1 }}
				/>
				<Image
					src={imageSources.fullSizeSrc}
					srcSet={imageSources.srcSet}
					className={imageStyles?.className ? `${imageStyles.className} ${styles['fullsize-image']}` : styles['fullsize-image']}
					style={{ ...imageStyles?.style, position: 'absolute', opacity: isLoaded ? 1 : 0 }}
					alt={alt ?? ''}
					loading={loading}
					onLoad={handleLoad}
					onTouchStart={onTouchStart}
					onTouchEnd={onTouchEnd}
				/>
			</div>
		</>
	);
};

export default ImageWithPlaceholder;
