import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { ContentType } from '~/components/layout-elements/content/content.types';
import Layout from '~/components/layout-elements/layout/Layout';
import Breadcrumbs from '~/components/ui-elements/breadcrumbs/Breadcrumbs';
import type { BreadcrumbItem } from '~/components/ui-elements/breadcrumbs/breadcrumbs.types';
import { useBreadcrumbs } from '~/hooks/useBreadcrumbs/useBreadcrumbs';
import type { ProjectData } from '~/views/projects/projects.types';
import { projects } from '~/views/projects/projects-view/projects-view.data';
import styles from '~/views/projects/projects-view/projects-view.module.scss';

const ProjectsView = () => {
  const { t } = useTranslation();
  const baseKey: string = 'ProjectsView';
  const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs(baseKey);

  return (
    <>
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
                  <div>
                    <Link to={project.cta} className={styles['projects__link']}>
                      <h6 className={styles['projects__title']}>{t(`${project.baseKey}.title`)}</h6>
                      <p className={styles['projects__description']}>
                        {t(`${project.baseKey}.description`)}
                      </p>
                    </Link>
                  </div>
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

export default ProjectsView;
