import React from 'react';

import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import GalleryPage from '../../ui-elements/GalleryPage/GalleryPage';
import { GalleryPageBaseKey } from '../../ui-elements/GalleryPage/galleryPage.types';
import styles from './ColorLandscapePage.module.scss';

const ColorLandscapePage: React.FC = () => {
	return <GalleryPage baseKey={GalleryPageBaseKey.COLOR_LANDSCAPE} images={galleryMetadata.colorLandscapes} wrapperClassName={styles.wrapper} />;
};

export default ColorLandscapePage;
