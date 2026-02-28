import React from 'react';
import { useTranslation } from 'react-i18next';
import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Breadcrumbs from '../../ui-elements/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../../ui-elements/Breadcrumbs/models/breadcrumbs.models';
import { useBreadcrumbs } from '../../ui-elements/Breadcrumbs/useBreadcrumbs';
import Gallery from '../../ui-elements/Gallery/Gallery';
import styles from './ColorLandscapePage.module.scss';

const ColorLandscapePage: React.FC = () => {
	const { t } = useTranslation();
	const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs('ColorLandscapePage');

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
						<Breadcrumbs items={breadcrumbItems} />
						<Gallery heading={`${t('ColorLandscapePage.heading')}`} images={galleryMetadata.colorLandscapes} />
					</div>
				}
			/>
		</>
	);
};

export default ColorLandscapePage;
