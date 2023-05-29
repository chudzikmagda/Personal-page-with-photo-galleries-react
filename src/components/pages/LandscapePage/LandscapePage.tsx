import React from 'react';
import { ReactElement } from 'react';
import Layout from '../../Layout/Layout';
import Card from '../../ui-elements/Card/Card';
import styles from './LandscapePage.module.scss';
import bwLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-bw-landscape-photography.jpg';
import colorLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-color-landscape-photography.jpg';
import { Paths } from '../../../routing/models/RoutingModels';

const LandscapePage: React.FC = (): ReactElement => {
	return (
		<Layout
			content={
				<div className={styles.landscape}>
					<Card bgImage={bwLandscapePhoto} title="Black and white landscape" description="View the gallery" path={Paths.BW_LANDSCAPE} />
					<Card bgImage={colorLandscapePhoto} title="Color landscape" description="View the gallery" path={Paths.COLOR_LANDSCAPE} />
				</div>
			}
		/>
	);
};

export default LandscapePage;
