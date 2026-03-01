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
import styles from './CityPage.module.scss';

const CityPage: React.FC = () => {
	const { t } = useTranslation();
	const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs('CityPage');

	return (
		<>
			<SEO title={t('CityPage.seo.title')} description={t('CityPage.seo.description')} keywords={t('CityPage.seo.keywords')} />

			<Layout
				content={
					<div className={styles.wrapper}>
						<Breadcrumbs items={breadcrumbItems} />
						<Gallery heading={`${t('CityPage.heading')} `} images={galleryMetadata.city} />
					</div>
				}
				contentType={ContentType.GRID}
			/>
		</>
	);
};

export default CityPage;
