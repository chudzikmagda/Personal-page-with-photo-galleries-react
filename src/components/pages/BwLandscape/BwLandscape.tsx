import React, { ReactElement } from 'react';
import styles from './BwLandscape.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/BwLandscapeModels';
import { t } from 'i18next';

const BwLandscape = (): ReactElement => {
	return (
		<Layout
			content={
				<div className={styles.wrapper}>
					<CustomGallery heading={`${t('Galleries.bwLandscape')}`} images={images} />
				</div>
			}
		/>
	);
};

export default BwLandscape;
