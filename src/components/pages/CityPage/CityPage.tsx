import React from 'react';

import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './cityPage.module.scss';

const CityPage: React.FC = () => {
	return <GalleryShell baseKey={GalleryShellBaseKey.CITY} images={galleryMetadata.city} wrapperClassName={styles.wrapper} />;
};

export default CityPage;
