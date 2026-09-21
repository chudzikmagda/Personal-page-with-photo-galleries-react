import ColorLandscapeView from '~/views/color-landscape-view/ColorLandscapeView';
import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';

export const meta = () => {
  return seoMeta({
    title: i18n.t('ColorLandscapeView.seo.title'),
    description: i18n.t('ColorLandscapeView.seo.description'),
    url: `${SITE_URL}/landscape/color-landscape`,
    imageUrl: `${SITE_URL}/images/seo/magda-chudzik-color-landscape-photography.webp`,
    imageAlt: i18n.t('ColorLandscapeView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('ColorLandscapeView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('ColorLandscapeView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const ColorLandscape = () => {
  return <ColorLandscapeView />;
};

export default ColorLandscape;
