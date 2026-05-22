import React from 'react';

import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import GalleryPage from '../../ui-elements/GalleryPage/GalleryPage';
import { GalleryPageBaseKey } from '../../ui-elements/GalleryPage/galleryPage.types';
import styles from './BwLandscapePage.module.scss';

const BwLandscapePage: React.FC = () => {
	return <GalleryPage baseKey={GalleryPageBaseKey.BW_LANDSCAPE} images={galleryMetadata.bwLandscapes} wrapperClassName={styles.wrapper} />;
};

export default BwLandscapePage;
