import React from 'react';

import { Paths } from '../../../routing/types/routing.types';
import { galleryMetadataCity } from '../../../shared/metadata/galleryMetadata.city';
import GalleryShell from '../../layout-elements/GalleryShell/GalleryShell';
import { GalleryShellBaseKey } from '../../layout-elements/GalleryShell/galleryShell.types';
import styles from './cityPage.module.scss';

const CityPage: React.FC = () => {
	return (
		<GalleryShell
			baseKey={GalleryShellBaseKey.CITY}
			image={galleryMetadataCity[0].variants.fullsize.src}
			images={galleryMetadataCity}
			url={`${window.location.origin}/${Paths.CITY}`}
			wrapperClassName={styles.wrapper}
		/>
	);
};

export default CityPage;
