import React from 'react';
import { useTranslation } from 'react-i18next';

import { Paths } from '../../../routing/types/routing.types';
import { ContentType } from '../../layout-elements/Content/content.types';
import PageShell from '../../layout-elements/PageShell/PageShell';
import Card from '../../ui-elements/Card/Card';
import landscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-landscape-photography.webp';
import urbanPhoto from './../../../assets/images/galleries/categories/magda-chudzik-urban-photography.webp';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<PageShell
			title={t('HomePage.seo.title')}
			description={t('HomePage.seo.description')}
			keywords={t('HomePage.seo.keywords')}
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
	);
};

export default HomePage;
