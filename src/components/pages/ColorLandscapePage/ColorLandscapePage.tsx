import React from 'react';

import { Paths } from '../../../routing/types/routing.types';
import { galleryMetadataColorLandscapes } from '../../../shared/metadata/galleryMetadata.colorLandscapes';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './colorLandscapePage.module.scss';

const ColorLandscapePage: React.FC = () => {
	return (
		<GalleryShell
			baseKey={GalleryShellBaseKey.COLOR_LANDSCAPE}
			image={galleryMetadataColorLandscapes[0].variants.fullsize.src}
			images={galleryMetadataColorLandscapes}
			url={`${window.location.origin}/${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`}
			wrapperClassName={styles.wrapper}
		/>
	);
};

export default ColorLandscapePage;
