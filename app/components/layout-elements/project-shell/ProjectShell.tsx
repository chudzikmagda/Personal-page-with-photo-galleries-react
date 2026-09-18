import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '~/hooks/useBreadcrumbs/useBreadcrumbs';
import Breadcrumbs from '~/components/ui-elements/breadcrumbs/Breadcrumbs';
import type { BreadcrumbItem } from '~/components/ui-elements/breadcrumbs/breadcrumbs.types';
import Button from '~/components/ui-elements/button/Button';
import { ButtonApperance } from '~/components/ui-elements/button/button.types';
import Slider from '~/components/ui-elements/slider/Slider';
import { ContentType } from '~/components/layout-elements/content/content.types';
import Layout from '~/components/layout-elements/layout/Layout';
import styles from './project-shell.module.scss';
import type { ProjectShellProps } from './project-shell.types';

const ProjectShell: React.FC<ProjectShellProps> = ({ baseKey, images, title, description }) => {
  const DESCRIPTION_PREVIEW_LIMIT = 200;
  const { t } = useTranslation();
  const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs(baseKey);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const descriptionParagraphs = (description ? t(description) : '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, ' ').trim())
    .filter(Boolean);

  const descriptionText = descriptionParagraphs.join('\n\n');

  const isDescriptionLong = descriptionParagraphs.join(' ').length > DESCRIPTION_PREVIEW_LIMIT;

  const leadText = t(`${baseKey}.leadText`);

  return (
    <>
      <Layout
        content={
          <div className={styles.wrapper}>
            <Breadcrumbs items={breadcrumbItems} />
            <h3 className={styles.title}>{t(title)}</h3>
            <div className={styles.intro}>
              {leadText !== `${baseKey}.leadText` && <p className={styles.leadText}>{leadText}</p>}
              {description && (
                <div className={styles.description}>
                  <div className={styles.descriptionContent}>
                    <p
                      className={`${styles.descriptionText} ${!isDescriptionExpanded && isDescriptionLong ? styles['descriptionText--clamped'] : ''}`}
                    >
                      {descriptionText}
                    </p>
                  </div>
                  {isDescriptionLong && (
                    <Button
                      apperance={ButtonApperance.TEXT}
                      cta={
                        isDescriptionExpanded ? t(`${baseKey}.readLess`) : t(`${baseKey}.readMore`)
                      }
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
