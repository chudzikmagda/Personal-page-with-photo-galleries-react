import React, { ReactElement } from 'react';
import styles from './ColorLandscape.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/ColorLandscapeModels';
import { t } from 'i18next';

const ColorLandscape = (): ReactElement => {
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

export default ColorLandscape;
