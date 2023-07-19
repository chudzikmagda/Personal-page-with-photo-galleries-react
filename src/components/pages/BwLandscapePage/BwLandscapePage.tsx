import React from 'react';
import styles from './BwLandscapePage.module.scss';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/BwLandscapePageModels';
import { t } from 'i18next';
import Layout from '../../layout-elements/Layout/Layout';

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
