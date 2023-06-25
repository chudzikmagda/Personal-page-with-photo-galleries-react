import React, { ReactElement } from 'react';
import styles from './City.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/CityModels';
import { t } from 'i18next';

const City = (): ReactElement => {
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

export default City;
