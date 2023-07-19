import React from 'react';
import styles from './CityPage.module.scss';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/CityPageModels';
import { t } from 'i18next';
import Layout from '../../layout-elements/Layout/Layout';

const CityPage: React.FC = () => {
	return (
		<Layout
			content={
				<div className={styles.wrapper}>
					<CustomGallery heading={`${t('Galleries.city')} `} images={images} />
				</div>
			}
		/>
	);
};

export default CityPage;
