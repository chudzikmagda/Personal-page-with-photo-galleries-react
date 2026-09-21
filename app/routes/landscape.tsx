import i18n from '~/i18n';
import seoMeta from '~/shared/utils/seoUtils';
import LandscapeView from '~/views/landscape-view/LandscapeView';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';

export const meta = () => {
  return seoMeta({
    title: i18n.t('LandscapeView.seo.title'),
    description: i18n.t('LandscapeView.seo.description'),
    url: `${SITE_URL}/landscape`,
    imageUrl: `${SITE_URL}/images/seo/magda-chudzik-landscape-photography.webp`,
    imageAlt: i18n.t('LandscapeView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('LandscapeView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('LandscapeView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const Landscape = () => {
  return <LandscapeView />;
};

export default Landscape;
