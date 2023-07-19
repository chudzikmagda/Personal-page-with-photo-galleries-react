import React from 'react';
import Card from '../../ui-elements/Card/Card';
import Layout from '../../layout-elements/Layout/Layout';
import bwLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-bw-landscape-photography.jpg';
import colorLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-color-landscape-photography.jpg';
import { Paths } from '../../../routing/models/RoutingModels';
import { useTranslation } from 'react-i18next';
import styles from './LandscapePage.module.scss';

const LandscapePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<Layout
			content={
				<div className={styles.landscape}>
					<Card
						bgImage={bwLandscapePhoto}
						title={t('Landscape.bwLandscape')}
						description={t('Landscape.viewTheGallery')}
						path={Paths.BW_LANDSCAPE}
					/>
					<Card
						bgImage={colorLandscapePhoto}
						title={t('Landscape.colorLandscape')}
						description={t('Landscape.viewTheGallery')}
						path={Paths.COLOR_LANDSCAPE}
					/>
				</div>
			}
		/>
	);
};

export default LandscapePage;
