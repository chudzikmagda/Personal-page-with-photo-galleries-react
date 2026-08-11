import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '../../../hooks/useBreadcrumbs/useBreadcrumbs';
import SEO from '../../SEO/SEO';
import Breadcrumbs from '../../ui-elements/Breadcrumbs/Breadcrumbs';
import { BreadcrumbItem } from '../../ui-elements/Breadcrumbs/breadcrumbs.types';
import Button from '../../ui-elements/Button/Button';
import { ButtonApperance } from '../../ui-elements/Button/button.types';
import Slider from '../../ui-elements/Slider/Slider';
import { ContentType } from '../Content/content.types';
import Layout from '../Layout/Layout';
import styles from './ProjectShell.module.scss';
import { ProjectShellProps } from './projectShell.types';

const ProjectShell: React.FC<ProjectShellProps> = ({ baseKey, images, title, description }) => {
	const DESCRIPTION_PREVIEW_LIMIT = 256;
	const { t } = useTranslation();
	const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs(baseKey);
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

	const descriptionParagraphs = (description ? t(description) : '')
		.split(/\n\s*\n/)
		.map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
		.filter(Boolean);

	const descriptionText = descriptionParagraphs.join('\n\n');

	const isDescriptionLong = descriptionParagraphs.join(' ').length > DESCRIPTION_PREVIEW_LIMIT;

	return (
		<>
			<SEO title={t(`${baseKey}.seo.title`)} description={t(`${baseKey}.seo.description`)} keywords={t(`${baseKey}.seo.keywords`)} />

			<Layout
				content={
					<div className={styles.wrapper}>
						<Breadcrumbs items={breadcrumbItems} />
						<h3 className={styles.title}>{t(title)}</h3>
						<div className={styles.intro}>
							{t(`${baseKey}.leadText`) !== `${baseKey}.leadText` && <p className={styles.leadText}>{t(`${baseKey}.leadText`)}</p>}
							{description && (
								<div className={styles.description}>
									<div className={styles.descriptionContent}>
										<p
											className={`${styles.descriptionText} ${!isDescriptionExpanded ? styles['descriptionText--clamped'] : ''}`}>
											{descriptionText}
										</p>
									</div>
									{isDescriptionLong && (
										<Button
											apperance={ButtonApperance.TEXT}
											cta={isDescriptionExpanded ? t(`${baseKey}.readLess`) : t(`${baseKey}.readMore`)}
											onClick={() => setIsDescriptionExpanded((prev) => !prev)}
										/>
									)}
								</div>
							)}
						</div>
						<Slider images={images} />
					</div>
				}
				contentType={ContentType.GRID}
			/>
		</>
	);
};

export default ProjectShell;
