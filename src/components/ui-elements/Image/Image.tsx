import React, { forwardRef } from 'react';
import styles from './Image.module.scss';
import { ImageProps } from './models/image.models';

const Image = forwardRef<HTMLImageElement, ImageProps>(
	({ src, alt, srcSet, onClick, className, style, loading, onTouchStart, onTouchEnd, onLoad }, ref) => (
		<img
			ref={ref}
			src={src}
			srcSet={srcSet}
			alt={alt}
			className={`${styles.image} ${className ?? ''}`}
			style={style}
			loading={loading}
			onClick={onClick}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			onLoad={onLoad}
		/>
	)
);

Image.displayName = 'Image';

export default Image;
