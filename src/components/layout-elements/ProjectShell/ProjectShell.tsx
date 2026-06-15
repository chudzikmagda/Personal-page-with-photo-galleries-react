import React from 'react';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs/useBreadcrumbs';
import SEO from '../../SEO/SEO';
import Breadcrumbs from '../../ui-elements/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../../ui-elements/Breadcrumbs/breadcrumbs.types';
import Slider from '../../ui-elements/Slider/Slider';
import { ContentType } from '../Content/content.types';
import Layout from '../Layout/Layout';
import styles from './ProjectShell.module.scss';
import { ProjectShellProps } from './projectShell.types';

const ProjectShell: React.FC<ProjectShellProps> = ({ baseKey, images, title, description }) => {
	const { t } = useTranslation();
	const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs(baseKey);

	return (
		<>
			<SEO title={t(`${baseKey}.seo.title`)} description={t(`${baseKey}.seo.description`)} keywords={t(`${baseKey}.seo.keywords`)} />

			<Layout
				content={
					<div className={styles.wrapper}>
						<Breadcrumbs items={breadcrumbItems} />
						<h3 className={styles.title}>{t(title)}</h3>
						{description && <p className={styles.description}>{t(description)}</p>}
						<Slider images={images} />
					</div>
				}
				contentType={ContentType.GRID}
			/>
		</>
	);
};

export default ProjectShell;
