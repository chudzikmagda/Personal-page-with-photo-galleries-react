import React from 'react';

import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import GalleryPage from '../../ui-elements/GalleryPage/GalleryPage';
import { GalleryPageBaseKey } from '../../ui-elements/GalleryPage/galleryPage.types';
import styles from './CityPage.module.scss';

const CityPage: React.FC = () => {
	return <GalleryPage baseKey={GalleryPageBaseKey.CITY} images={galleryMetadata.city} wrapperClassName={styles.wrapper} />;
};

export default CityPage;
