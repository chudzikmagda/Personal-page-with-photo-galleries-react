import { useTranslation } from 'react-i18next';

import { ContentType } from '~/components/layout-elements/content/content.types';
import Layout from '~/components/layout-elements/layout/Layout';
import Breadcrumbs from '~/components/ui-elements/breadcrumbs/Breadcrumbs';
import type { BreadcrumbItem } from '~/components/ui-elements/breadcrumbs/breadcrumbs.types';
import Gallery from '~/components/ui-elements/gallery/Gallery';
import { useBreadcrumbs } from '~/hooks/useBreadcrumbs/useBreadcrumbs';

import type { GalleryShellProps } from './gallery-shell.types';

const GalleryShell: React.FC<GalleryShellProps> = ({ baseKey, images, wrapperClassName }) => {
  const { t } = useTranslation();
  const breadcrumbItems: BreadcrumbItem[] = useBreadcrumbs(baseKey);

  return (
    <>
      <Layout
        content={
          <div className={wrapperClassName}>
            <Breadcrumbs items={breadcrumbItems} />
            <Gallery heading={t(`${baseKey}.heading`)} images={images} />
          </div>
        }
        contentType={ContentType.GRID}
      />
    </>
  );
};

export default GalleryShell;
