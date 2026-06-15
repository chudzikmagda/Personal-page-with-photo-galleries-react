import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useBreadcrumbs } from '../../../../hooks/useBreadcrumbs/useBreadcrumbs';
import { ContentType } from '../../../layout-elements/Content/content.types';
import Layout from '../../../layout-elements/Layout/Layout';
import SEO from '../../../SEO/SEO';
import Breadcrumbs from '../../../ui-elements/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../../../ui-elements/Breadcrumbs/breadcrumbs.types';
import { ProjectData } from '../projects.types';
import { projects } from './projectsPage.data';
import styles from './projectsPage.module.scss';

const ProjectsPage: React.FunctionComponent = () => {
	const { t } = useTranslation();
	const baseKey: string = 'ProjectsPage';
	const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs(baseKey);

	return (
		<>
			<SEO title={t(`${baseKey}.seo.title`)} description={t(`${baseKey}.seo.description`)} keywords={t(`${baseKey}.seo.keywords`)} />

			<Layout
				content={
					<div className={styles.wrapper}>
						<Breadcrumbs items={breadcrumbItems} />
						<h3 className={styles.title}>{t(`${baseKey}.title`)}</h3>
						<div className={styles.projects}>
							{projects.map((project: ProjectData) => (
								<div key={project.baseKey} className={styles['projects__wrapper']}>
									<div className={styles['projects__image-container']}>
										<Link to={project.cta}>
											<img
												src={project.image}
												className={styles['projects__image']}
												loading="lazy"
												alt={t(`${project.baseKey}.title`)}
											/>
										</Link>
									</div>
									<h6 className={styles['projects__title']}>{t(`${project.baseKey}.title`)}</h6>
								</div>
							))}
						</div>
					</div>
				}
				contentType={ContentType.GRID}
			/>
		</>
	);
};

export default ProjectsPage;
