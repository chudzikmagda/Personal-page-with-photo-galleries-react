import React from 'react';
import styles from './ColorLandscapePage.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/ColorLandscapePageModels';
import { t } from 'i18next';

const ColorLandscapePage: React.FC = () => {
	return (
		<Layout
			content={
				<div className={styles.wrapper}>
					<CustomGallery heading={`${t('Galleries.colorLandscape')}`} images={images} />
				</div>
			}
		/>
	);
};

export default ColorLandscapePage;
