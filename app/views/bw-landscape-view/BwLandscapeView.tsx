import { GalleryShellBaseKey } from '~/components/layout-elements/gallery-shell/gallery-shell.types';
import GalleryShell from '~/components/layout-elements/gallery-shell/GalleryShell';
import { galleryMetadataBwLandscapes } from '~/shared/metadata/bw-landscapes';
import styles from '~/views/bw-landscape-view/bw-landscape-view.module.scss';

const BwLandscapeView: React.FC = () => {
  return (
    <GalleryShell
      baseKey={GalleryShellBaseKey.BW_LANDSCAPE}
      images={galleryMetadataBwLandscapes}
      wrapperClassName={styles.wrapper}
    />
  );
};

export default BwLandscapeView;
