import React from 'react';
import CustomGallery from '../../ui-elements/Gallery/Gallery';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import { images } from './models/ColorLandscapePageModels';
import { useTranslation } from 'react-i18next';
import styles from './ColorLandscapePage.module.scss';

const ColorLandscapePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO
				title={t('ColorLandscapePage.seo.title')}
				description={t('ColorLandscapePage.seo.description')}
				keywords={t('ColorLandscapePage.seo.keywords')}
			/>

			<Layout
				content={
					<div className={styles.wrapper}>
						<CustomGallery heading={`${t('ColorLandscapePage.heading')}`} images={images} />
					</div>
				}
			/>
		</>
	);
};

export default ColorLandscapePage;
