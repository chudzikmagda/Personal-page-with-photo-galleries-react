import React from 'react';

import { galleryMetadataCity } from '../../../shared/metadata/galleryMetadata.city';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './cityPage.module.scss';

const CityPage: React.FC = () => {
	return <GalleryShell baseKey={GalleryShellBaseKey.CITY} images={galleryMetadataCity} wrapperClassName={styles.wrapper} />;
};

export default CityPage;
