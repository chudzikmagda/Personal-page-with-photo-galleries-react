import React from 'react';

import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './bwLandscapePage.module.scss';

const BwLandscapePage: React.FC = () => {
	return <GalleryShell baseKey={GalleryShellBaseKey.BW_LANDSCAPE} images={galleryMetadata.bwLandscapes} wrapperClassName={styles.wrapper} />;
};

export default BwLandscapePage;
