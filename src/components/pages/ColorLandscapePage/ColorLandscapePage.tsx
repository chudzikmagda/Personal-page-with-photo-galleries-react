import React from 'react';

import { galleryMetadataColorLandscapes } from '../../../shared/metadata/galleryMetadata.colorLandscapes';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './colorLandscapePage.module.scss';

const ColorLandscapePage: React.FC = () => {
	return <GalleryShell baseKey={GalleryShellBaseKey.COLOR_LANDSCAPE} images={galleryMetadataColorLandscapes} wrapperClassName={styles.wrapper} />;
};

export default ColorLandscapePage;
