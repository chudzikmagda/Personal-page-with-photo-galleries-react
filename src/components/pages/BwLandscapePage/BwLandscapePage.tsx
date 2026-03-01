import React from 'react';
import { useTranslation } from 'react-i18next';
import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import { ContentType } from '../../layout-elements/Content/models/content.models';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Breadcrumbs from '../../ui-elements/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../../ui-elements/Breadcrumbs/models/breadcrumbs.models';
import { useBreadcrumbs } from '../../ui-elements/Breadcrumbs/useBreadcrumbs';
import Gallery from '../../ui-elements/Gallery/Gallery';
import styles from './BwLandscapePage.module.scss';

const BwLandscapePage: React.FC = () => {
	const { t } = useTranslation();
	const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs('BwLandscapePage');

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
						<Breadcrumbs items={breadcrumbItems} />
						<Gallery heading={`${t('BwLandscapePage.heading')}`} images={galleryMetadata.bwLandscapes} />
					</div>
				}
				contentType={ContentType.GRID}
			/>
		</>
	);
};

export default BwLandscapePage;
