import { galleryMetadataCity } from '~/shared/metadata/city';
import GalleryShell from '~/components/layout-elements/gallery-shell/GalleryShell';
import { GalleryShellBaseKey } from '~/components/layout-elements/gallery-shell/gallery-shell.types';
import styles from '~/views/city-view/city-view.module.scss';

const CityView: React.FC = () => {
  return (
    <GalleryShell
      baseKey={GalleryShellBaseKey.CITY}
      images={galleryMetadataCity}
      wrapperClassName={styles.wrapper}
    />
  );
};

export default CityView;
