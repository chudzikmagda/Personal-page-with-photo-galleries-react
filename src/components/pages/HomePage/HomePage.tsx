import React from 'react';
import Card from '../../ui-elements/Card/Card';
import styles from './HomePage.module.scss';
import urbanPhoto from './../../../assets/images/galleries/categories/magda-chudzik-urban-photography.jpg';
import landscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-landscape-photography.jpg';
import { Paths } from '../../../routing/models/RoutingModels';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout-elements/Layout/Layout';

const HomePage: React.FC = () => {
	const { t } = useTranslation();

	return (
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
	);
};

export default HomePage;
