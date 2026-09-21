import type React from 'react';
import { useTranslation } from 'react-i18next';

import bwLandscapePhoto from '~/assets/images/galleries/categories/magda-chudzik-bw-landscape-photography.webp';
import colorLandscapePhoto from '~/assets/images/galleries/categories/magda-chudzik-color-landscape-photography.webp';
import AccordionCards from '~/components/layout-elements/accordion-cards/AccordionCards';
import { ContentType } from '~/components/layout-elements/content/content.types';
import PageShell from '~/components/layout-elements/page-shell/PageShell';
import Card from '~/components/ui-elements/card/Card';
import { Paths } from '~/routes.types';

const LandscapeView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageShell
      content={
        <AccordionCards>
          <Card
            bgImage={bwLandscapePhoto}
            title={t('LandscapeView.bwLandscape')}
            cta={t('LandscapeView.viewTheGallery')}
            path={`/${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`}
          />
          <Card
            bgImage={colorLandscapePhoto}
            title={t('LandscapeView.colorLandscape')}
            cta={t('LandscapeView.viewTheGallery')}
            path={`/${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`}
          />
        </AccordionCards>
      }
      contentType={ContentType.FULLWIDTH}
    />
  );
};

export default LandscapeView;
