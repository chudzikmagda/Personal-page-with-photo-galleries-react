import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';
import BwLandscapeView from '~/views/bw-landscape-view/BwLandscapeView';

export const meta = () => {
  return seoMeta({
    title: i18n.t('BwLandscapeView.seo.title'),
    description: i18n.t('BwLandscapeView.seo.description'),
    url: `${SITE_URL}/landscape/black-and-white-landscape`,
    imageUrl: `${SITE_URL}/images/seo/magda-chudzik-bw-landscape-photography.webp`,
    imageAlt: i18n.t('BwLandscapeView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('BwLandscapeView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('BwLandscapeView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const BwLandscape = () => {
  return <BwLandscapeView />;
};

export default BwLandscape;
