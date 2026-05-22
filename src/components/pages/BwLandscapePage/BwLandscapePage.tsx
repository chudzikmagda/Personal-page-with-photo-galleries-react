import React from 'react';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs/useBreadcrumbs';
import { galleryMetadata } from '../../../shared/metadata/galleryImageMetadata';
import { ContentType } from '../../layout-elements/Content/content.types';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Breadcrumbs from '../../ui-elements/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../../ui-elements/Breadcrumbs/breadcrumbs.types';
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
