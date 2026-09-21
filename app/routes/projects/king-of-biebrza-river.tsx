import KingOfBiebrzaRiverView from '~/views/projects/king-of-biebrza-river-view/KingOfBiebrzaRiverView';
import i18n from '~/i18n';
import { SITE_URL } from '~/shared/types/site.types';
import { getLanguageLocale } from '~/shared/utils/getLanguage.utils';
import seoMeta from '~/shared/utils/seoUtils';

export const meta = () => {
  return seoMeta({
    title: i18n.t('KingOfBiebrzaRiverView.seo.title'),
    description: i18n.t('KingOfBiebrzaRiverView.seo.description'),
    url: `${SITE_URL}/projects/king-of-biebrza-river`,
    imageUrl: `${SITE_URL}/images/seo/magda-chudzik-documentary-photography-king-of-biebrza-river.webp`,
    imageAlt: i18n.t('KingOfBiebrzaRiverView.seo.title'),
    imageWidth: '1200',
    imageHeight: '630',
    imageType: 'image/webp',
    keywords: i18n.t('KingOfBiebrzaRiverView.seo.keywords'),
    type: 'website',
    siteName: i18n.t('KingOfBiebrzaRiverView.seo.title'),
    locale: getLanguageLocale(),
  });
};

const KingOfBiebrzaRiver = () => {
  return <KingOfBiebrzaRiverView />;
};

export default KingOfBiebrzaRiver;
