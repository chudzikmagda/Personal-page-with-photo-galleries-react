import PrintsView from '~/views/prints-view/PrintsView';
import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';

export const meta = () => {
  return seoMeta({
    title: i18n.t('PrintsView.seo.title'),
    description: i18n.t('PrintsView.seo.description'),
    url: `${SITE_URL}/prints`,
    imageUrl: `${SITE_URL}/images/template/photographer-magda-chudzik.webp`,
    keywords: i18n.t('PrintsView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('PrintsView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const Prints = () => {
  return <PrintsView />;
};

export default Prints;
