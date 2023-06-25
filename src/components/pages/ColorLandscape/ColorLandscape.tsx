import React, { ReactElement } from 'react';
import styles from './ColorLandscape.module.scss';
import Layout from '../../Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import { images } from './models/ColorLandscapeModels';

const ColorLandscape = (): ReactElement => {
	return (
		<Layout
			content={
				<div className={styles.wrapper}>
					<CustomGallery id="gallery-city" heading="Color Landscape" images={images} />
				</div>
			}
		/>
	);
};

export default ColorLandscape;
