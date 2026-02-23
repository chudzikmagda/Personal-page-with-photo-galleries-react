import React from 'react';
import { useTranslation } from 'react-i18next';
import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Gallery from '../../ui-elements/Gallery/Gallery';
import styles from './CityPage.module.scss';

const CityPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO title={t('CityPage.seo.title')} description={t('CityPage.seo.description')} keywords={t('CityPage.seo.keywords')} />

			<Layout
				content={
					<div className={styles.wrapper}>
						<Gallery heading={`${t('CityPage.heading')} `} images={galleryMetadata.city} />
					</div>
				}
			/>
		</>
	);
};

export default CityPage;
