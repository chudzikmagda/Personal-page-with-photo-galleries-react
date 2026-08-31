import React from 'react';

import { Paths } from '../../../routing/types/routing.types';
import { galleryMetadataBwLandscapes } from '../../../shared/metadata/galleryMetadata.bwLandscapes';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './bwLandscapePage.module.scss';

const BwLandscapePage: React.FC = () => {
	return (
		<GalleryShell
			baseKey={GalleryShellBaseKey.BW_LANDSCAPE}
			image={galleryMetadataBwLandscapes[0].variants.fullsize.src}
			images={galleryMetadataBwLandscapes}
			url={`${window.location.origin}/${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`}
			wrapperClassName={styles.wrapper}
		/>
	);
};

export default BwLandscapePage;
