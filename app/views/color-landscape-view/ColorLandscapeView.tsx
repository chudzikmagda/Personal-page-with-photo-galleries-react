import { GalleryShellBaseKey } from '~/components/layout-elements/gallery-shell/gallery-shell.types';
import GalleryShell from '~/components/layout-elements/gallery-shell/GalleryShell';
import { galleryMetadataColorLandscapes } from '~/shared/metadata/color-landscapes';
import styles from '~/views/color-landscape-view/color-landscape-view.module.scss';

const ColorLandscapeView: React.FC = () => {
  return (
    <GalleryShell
      baseKey={GalleryShellBaseKey.COLOR_LANDSCAPE}
      images={galleryMetadataColorLandscapes}
      wrapperClassName={styles.wrapper}
    />
  );
};

export default ColorLandscapeView;
