import ContactView from '~/views/contact-view/ContactView';
import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';

export const meta = () => {
  return seoMeta({
    title: i18n.t('ContactView.seo.title'),
    description: i18n.t('ContactView.seo.description'),
    url: `${SITE_URL}/contact`,
    imageUrl: `${SITE_URL}/images/template/photographer-magda-chudzik.webp`,
    keywords: i18n.t('ContactView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('ContactView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const Contact = () => {
  return <ContactView />;
};

export default Contact;
