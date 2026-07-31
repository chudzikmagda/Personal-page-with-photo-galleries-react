import React from 'react';

import { galleryMetadataBwLandscapes } from '../../../shared/metadata/galleryMetadata.bwLandscapes';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './bwLandscapePage.module.scss';

const BwLandscapePage: React.FC = () => {
	return <GalleryShell baseKey={GalleryShellBaseKey.BW_LANDSCAPE} images={galleryMetadataBwLandscapes} wrapperClassName={styles.wrapper} />;
};

export default BwLandscapePage;
