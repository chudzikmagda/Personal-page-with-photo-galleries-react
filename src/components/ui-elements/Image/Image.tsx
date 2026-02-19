import React, { forwardRef } from 'react';
import styles from './Image.module.scss';
import { ImageProps } from './image.models';

const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, alt, onClick, className, loading, onTouchStart, onTouchEnd, style }, ref) => (
	<img
		ref={ref}
		src={src}
		alt={alt}
		className={`${styles.image} ${className ?? ''}`}
		style={style}
		loading={loading}
		onClick={onClick}
		onTouchStart={onTouchStart}
		onTouchEnd={onTouchEnd}
	/>
));

Image.displayName = 'Image';

export default Image;
