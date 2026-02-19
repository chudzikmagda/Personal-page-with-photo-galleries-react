/* eslint-disable indent */

import React, { useEffect, useRef, useState } from 'react';
import { Breakpoints } from '../../../../shared/models/models';
import ImageComponent from '../../Image/Image';
import { ImageLoading } from '../../Image/image.models';
import styles from './GalleryImage.module.scss';
import { GalleryImageProps } from './models/galleryImage.models';

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, onClick }) => {
	const [imageSrc, setImageSrc] = useState<string>(src.lowQuality ?? '');
	const imgRef = useRef<HTMLImageElement>(null);

	const setImageSrcBasedOnWindowSize = (): void => {
		const windowWidth: number = window.innerWidth;

		switch (true) {
			case windowWidth <= Breakpoints.SMALL:
				return setImageSrc(src.w480);
			case windowWidth <= Breakpoints.MEDIUM:
				return setImageSrc(src.w768);
			case windowWidth <= Breakpoints.LARGE:
				return setImageSrc(src.w1024);
			default:
				return setImageSrc(src.fullsize);
		}
	};

	const handleWindowResize = (): void => {
		setImageSrcBasedOnWindowSize();
	};

	useEffect(() => {
		setImageSrcBasedOnWindowSize();
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [src]);

	useEffect(() => {
		if (imgRef && imgRef.current && imgRef.current.onload) {
			setImageSrc(imageSrc);
		}
	}, [imageSrc, src]);

	return (
		<ImageComponent
			ref={imgRef}
			src={imageSrc}
			onClick={onClick}
			className={`${styles['gallery-image']} ${
				imageSrc === src.lowQuality ? styles['gallery-image__loading'] : styles['gallery-image__loaded']
			}`}
			loading={ImageLoading.Lazy}
			alt={alt ?? 'Gallery image'}
		/>
	);
};

export default GalleryImage;
