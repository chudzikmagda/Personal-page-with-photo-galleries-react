import React from 'react';
import { createSrcSet } from '../../../../shared/utils/imageUtils';
import Image from '../../Image/Image';
import { ImageLoading } from '../../Image/image.models';
import styles from './GalleryImage.module.scss';
import { GalleryImageType } from './models/galleryImage.models';

const GalleryImage: React.FC<GalleryImageType> = ({ variants, alt }) => {
	return (
		<Image
			src={variants.fullsize.src}
			srcSet={createSrcSet(variants)}
			className={styles['gallery-image']}
			alt={alt}
			loading={ImageLoading.Lazy}
		/>
	);
};

export default GalleryImage;
