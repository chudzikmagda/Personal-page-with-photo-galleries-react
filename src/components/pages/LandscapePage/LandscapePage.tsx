import React from 'react';
import Card from '../../ui-elements/Card/Card';
import Layout from '../../layout-elements/Layout/Layout';
import bwLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-bw-landscape-photography.webp';
import colorLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-color-landscape-photography.webp';
import SEO from '../../SEO/SEO';
import { Paths } from '../../../routing/models/RoutingModels';
import { useTranslation } from 'react-i18next';
import styles from './LandscapePage.module.scss';

const LandscapePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO title={t('LandscapePage.seo.title')} description={t('LandscapePage.seo.description')} keywords={t('LandscapePage.seo.keywords')} />

			<Layout
				content={
					<div className={styles.landscape}>
						<Card
							bgImage={bwLandscapePhoto}
							title={t('LandscapePage.bwLandscape')}
							description={t('LandscapePage.viewTheGallery')}
							path={Paths.BW_LANDSCAPE}
						/>
						<Card
							bgImage={colorLandscapePhoto}
							title={t('LandscapePage.colorLandscape')}
							description={t('LandscapePage.viewTheGallery')}
							path={Paths.COLOR_LANDSCAPE}
						/>
					</div>
				}
			/>
		</>
	);
};

export default LandscapePage;
