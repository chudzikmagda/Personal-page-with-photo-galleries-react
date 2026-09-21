import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';
import HomeView from '~/views/home/HomeView';

export const meta = () => {
  return seoMeta({
    title: i18n.t('HomeView.seo.title'),
    description: i18n.t('HomeView.seo.description'),
    url: SITE_URL,
    imageUrl: `${SITE_URL}/images/seo/magda-chudzik-urban-photography.webp`,
    imageAlt: i18n.t('HomeView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('HomeView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('HomeView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const Home = () => {
  return <HomeView />;
};

export default Home;
