import CityView from '~/views/city-view/CityView';
import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';

export const meta = () => {
  return seoMeta({
    title: i18n.t('CityView.seo.title'),
    description: i18n.t('CityView.seo.description'),
    url: `${SITE_URL}/city`,
    imageUrl: `${SITE_URL}/images/galleries/categories/magda-chudzik-city-photography.webp`,
    keywords: i18n.t('CityView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('CityView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const City = () => {
  return <CityView />;
};

export default City;
