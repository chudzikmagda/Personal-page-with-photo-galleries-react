import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paths } from '../../../routing/models/RoutingModels';
import { ContentType } from '../../layout-elements/Content/models/content.models';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Card from '../../ui-elements/Card/Card';
import landscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-landscape-photography.webp';
import urbanPhoto from './../../../assets/images/galleries/categories/magda-chudzik-urban-photography.webp';
import styles from './HomePage.module.scss';

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
				contentType={ContentType.FULLWIDTH}
			/>
		</>
	);
};

export default HomePage;
