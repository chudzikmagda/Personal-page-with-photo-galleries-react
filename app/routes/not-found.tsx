import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';
import PageNotFoundView from '~/views/page-not-found/PageNotFound';

export const meta = () => {
  return seoMeta({
    title: i18n.t('PageNotFoundView.seo.title'),
    description: i18n.t('PageNotFoundView.seo.description'),
    url: `${SITE_URL}/404`,
    imageUrl: `${SITE_URL}/images/template/page404-image-background.webp`,
    keywords: i18n.t('PageNotFoundView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('PageNotFoundView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const NotFound = () => {
  return <PageNotFoundView />;
};

export default NotFound;
