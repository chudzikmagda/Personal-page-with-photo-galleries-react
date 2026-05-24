import React from 'react';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs/useBreadcrumbs';
import SEO from '../../SEO/SEO';
import Breadcrumbs from '../../ui-elements/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../../ui-elements/Breadcrumbs/breadcrumbs.types';
import Gallery from '../../ui-elements/Gallery/Gallery';
import { ContentType } from '../Content/content.types';
import Layout from '../Layout/Layout';
import { GalleryShellProps } from './galleryShell.types';

const GalleryShell: React.FC<GalleryShellProps> = ({ baseKey, images, wrapperClassName }) => {
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

export default GalleryShell;
