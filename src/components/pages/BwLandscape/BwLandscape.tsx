import React, { ReactElement } from 'react';
import styles from './BwLandscape.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/BwLandscapeModels';

const BwLandscape = (): ReactElement => {
	return (
		<Layout
			content={
				<div className={styles.wrapper}>
					<CustomGallery heading="Black and white landscape" images={images} />
				</div>
			}
		/>
	);
};

export default BwLandscape;
