import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Gallery from '../../ui-elements/Gallery/Gallery';
import styles from './ColorLandscapePage.module.scss';
import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';

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
						<Gallery heading={`${t('ColorLandscapePage.heading')}`} images={galleryMetadata.colorLandscapes} />
					</div>
				}
			/>
		</>
	);
};

export default ColorLandscapePage;
