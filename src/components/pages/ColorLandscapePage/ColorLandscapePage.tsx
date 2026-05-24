import React from 'react';

import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './ColorLandscapePage.module.scss';

const ColorLandscapePage: React.FC = () => {
	return <GalleryShell baseKey={GalleryShellBaseKey.COLOR_LANDSCAPE} images={galleryMetadata.colorLandscapes} wrapperClassName={styles.wrapper} />;
};

export default ColorLandscapePage;
