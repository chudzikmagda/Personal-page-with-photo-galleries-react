import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';
import AboutView from '~/views/about-view/AboutView';

export const meta = () => {
  return seoMeta({
    title: i18n.t('AboutView.seo.title'),
    description: i18n.t('AboutView.seo.description'),
    url: `${SITE_URL}/about`,
    imageUrl: `${SITE_URL}/images/seo/photographer-magda-chudzik.webp`,
    imageAlt: i18n.t('AboutView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('AboutView.seo.keywords'),
    type: 'article',
    siteName: i18n.t('AboutView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const About = () => {
  return <AboutView />;
};

export default About;
