import React from 'react';
import styles from './CityPage.module.scss';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import SEO from '../../SEO/SEO';
import { images } from './models/CityPageModels';
import Layout from '../../layout-elements/Layout/Layout';
import { useTranslation } from 'react-i18next';

const CityPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO title={t('CityPage.seo.title')} description={t('CityPage.seo.description')} keywords={t('CityPage.seo.keywords')} />

			<Layout
				content={
					<div className={styles.wrapper}>
						<CustomGallery heading={`${t('CityPage.heading')} `} images={images} />
					</div>
				}
			/>
		</>
	);
};

export default CityPage;
