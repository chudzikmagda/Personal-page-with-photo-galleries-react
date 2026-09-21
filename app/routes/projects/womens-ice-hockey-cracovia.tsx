import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';
import WomensIceHockeyCracoviaView from '~/views/projects/womens-ice-hockey-cracovia-view/WomensIceHockeyCracoviaView';

export const meta = () => {
  return seoMeta({
    title: i18n.t('WomensIceHockeyCracoviaView.seo.title'),
    description: i18n.t('WomensIceHockeyCracoviaView.seo.description'),
    url: `${SITE_URL}/projects/womens-ice-hockey-cracovia`,
    imageUrl: `${SITE_URL}/images/seo/magda-chudzik-documentary-photography-womens-ice-hockey.webp`,
    imageAlt: i18n.t('WomensIceHockeyCracoviaView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('WomensIceHockeyCracoviaView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('WomensIceHockeyCracoviaView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const WomensIceHockeyCracovia = () => {
  return <WomensIceHockeyCracoviaView />;
};

export default WomensIceHockeyCracovia;
