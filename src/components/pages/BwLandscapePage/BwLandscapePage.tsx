import React from 'react';
import Layout from '../../layout-elements/Layout/Layout';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import SEO from '../../SEO/SEO';
import { images } from './models/BwLandscapePageModels';
import { useTranslation } from 'react-i18next';
import styles from './BwLandscapePage.module.scss';

const BwLandscapePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO
				title={t('BwLandscapePage.seo.title')}
				description={t('BwLandscapePage.seo.description')}
				keywords={t('BwLandscapePage.seo.keywords')}
			/>

			<Layout
				content={
					<div className={styles.wrapper}>
						<CustomGallery heading={`${t('BwLandscapePage.heading')}`} images={images} />
					</div>
				}
			/>
		</>
	);
};

export default BwLandscapePage;
