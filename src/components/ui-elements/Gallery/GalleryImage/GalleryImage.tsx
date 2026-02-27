import React from 'react';
import { createSrcSet } from '../../../../shared/utils/imageUtils';
import styles from './GalleryImage.module.scss';
import { GalleryImageType } from './models/galleryImage.models';
import ImageWithPlaceholder from '../../ImageWithPlaceholder/ImageWithPlaceholder';

const GalleryImage: React.FC<GalleryImageType> = ({ variants, alt }) => {
	return (
		<ImageWithPlaceholder
			imageSources={{
				lowQualitySrc: variants.lowQuality.src,
				fullSizeSrc: variants.fullsize.src,
				srcSet: createSrcSet(variants)
			}}
			alt={alt}
			imageStyles={{
				className: styles['gallery-image'],
				placeholderClassName: styles['gallery-image__lowquality'],
				style: { objectFit: 'cover', width: '100%', height: '100%' }
			}}
		/>
	);
};

export default GalleryImage;
