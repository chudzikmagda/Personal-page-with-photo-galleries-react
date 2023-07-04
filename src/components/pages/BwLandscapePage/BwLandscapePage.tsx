import React from 'react';
import styles from './BwLandscapePage.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/BwLandscapePageModels';
import { t } from 'i18next';

const BwLandscapePage: React.FC = () => {
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

export default BwLandscapePage;
