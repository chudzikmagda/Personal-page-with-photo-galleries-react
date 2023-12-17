import React from 'react';
import Card from '../../ui-elements/Card/Card';
import styles from './HomePage.module.scss';
import urbanPhoto from './../../../assets/images/galleries/categories/magda-chudzik-urban-photography.webp';
import landscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-landscape-photography.webp';
import { Paths } from '../../../routing/models/RoutingModels';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';

const HomePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO title={t('HomePage.seo.title')} description={t('HomePage.seo.description')} keywords={t('HomePage.seo.keywords')} />

			<Layout
				content={
					<div className={styles.homepage}>
						<Card bgImage={urbanPhoto} title={t('HomePage.cityTitle')} description={t('HomePage.viewTheGallery')} path={Paths.CITY} />
						<Card
							bgImage={landscapePhoto}
							title={t('HomePage.landscapeTitle')}
							description={t('HomePage.viewTheGallery')}
							path={Paths.LANDSCAPE}
						/>
					</div>
				}
			/>
		</>
	);
};

export default HomePage;
