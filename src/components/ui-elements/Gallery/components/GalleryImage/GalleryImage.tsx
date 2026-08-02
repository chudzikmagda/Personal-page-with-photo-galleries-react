import React from 'react';

import { createSrcSet } from '../../../../../shared/utils/imageUtils';
import ImageWithPlaceholder from '../../../ImageWithPlaceholder/ImageWithPlaceholder';
import styles from './galleryImage.module.scss';
import { GalleryImageType } from './galleryImage.types';

const GalleryImage: React.FC<GalleryImageType> = ({ variants, alt, loading, sizes }) => {
	return (
		<ImageWithPlaceholder
			imageSources={{
				lowQualitySrc: variants.lowQuality.src,
				fullSizeSrc: variants.fullsize.src,
				srcSet: createSrcSet(variants),
				sizes
			}}
			alt={alt}
			loading={loading}
			imageStyles={{
				className: styles['gallery-image'],
				placeholderClassName: styles['gallery-image__lowquality'],
				style: { objectFit: 'cover', width: '100%', height: '100%' }
			}}
		/>
	);
};

export default GalleryImage;
