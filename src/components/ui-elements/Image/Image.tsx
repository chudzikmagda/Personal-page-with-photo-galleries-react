import React, { forwardRef } from 'react';

import styles from './image.module.scss';
import { ImageProps } from './image.types';

const Image = forwardRef<HTMLImageElement, ImageProps>(
	({ src, alt, srcSet, sizes, onClick, className, style, loading, onTouchStart, onTouchEnd, onLoad }, ref) => (
		<img
			ref={ref}
			src={src}
			srcSet={srcSet}
			sizes={sizes}
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
