import React from 'react';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs/useBreadcrumbs';
import { ContentType } from '../../layout-elements/Content/content.types';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../Breadcrumbs/breadcrumbs.types';
import Gallery from '../Gallery/Gallery';
import { GalleryPageProps } from './galleryPage.types';

const GalleryPage: React.FC<GalleryPageProps> = ({ baseKey, images, wrapperClassName }) => {
	const { t } = useTranslation();
	const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs(baseKey);

	return (
		<>
			<SEO title={t(`${baseKey}.seo.title`)} description={t(`${baseKey}.seo.description`)} keywords={t(`${baseKey}.seo.keywords`)} />

			<Layout
				content={
					<div className={wrapperClassName}>
						<Breadcrumbs items={breadcrumbItems} />
						<Gallery heading={t(`${baseKey}.heading`)} images={images} />
					</div>
				}
				contentType={ContentType.GRID}
			/>
		</>
	);
};

export default GalleryPage;
