import { useTranslation } from 'react-i18next';

import landscapePhoto from '~/assets/images/galleries/categories/magda-chudzik-landscape-photography.webp';
import urbanPhoto from '~/assets/images/galleries/categories/magda-chudzik-urban-photography.webp';
import AccordionCards from '~/components/layout-elements/accordion-cards/AccordionCards';
import { ContentType } from '~/components/layout-elements/content/content.types';
import PageShell from '~/components/layout-elements/page-shell/PageShell';
import Card from '~/components/ui-elements/card/Card';
import { Paths } from '~/routes.types';

const HomeView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageShell
      content={
        <AccordionCards>
          <Card
            bgImage={urbanPhoto}
            title={t('HomeView.cityTitle')}
            cta={t('HomeView.viewTheGallery')}
            path={Paths.CITY}
          />
          <Card
            bgImage={landscapePhoto}
            title={t('HomeView.landscapeTitle')}
            cta={t('HomeView.viewTheGallery')}
            path={Paths.LANDSCAPE}
          />
        </AccordionCards>
      }
      contentType={ContentType.FULLWIDTH}
    />
  );
};

export default HomeView;
