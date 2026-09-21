import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';
import ProjectsView from '~/views/projects/projects-view/ProjectsView';

export const meta = () => {
  return seoMeta({
    title: i18n.t('ProjectsView.seo.title'),
    description: i18n.t('ProjectsView.seo.description'),
    url: `${SITE_URL}/projects`,
    imageUrl: `${SITE_URL}/images/seo/photographer-magda-chudzik.webp`,
    imageAlt: i18n.t('ProjectsView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('ProjectsView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('ProjectsView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const Projects = () => {
  return <ProjectsView />;
};

export default Projects;
