import ImageWithPlaceholder from '~/components/ui-elements/image-with-placeholder/ImageWithPlaceholder';
import { createSrcSet } from '~/shared/utils/image.utils';

import styles from './gallery-image.module.scss';
import type { GalleryImageType } from './gallery-image.types';

const GalleryImage: React.FC<GalleryImageType> = ({ variants, alt, loading, sizes }) => {
  return (
    <ImageWithPlaceholder
      imageSources={{
        lowQualitySrc: variants.lowQuality.src,
        fullSizeSrc: variants.fullsize.src,
        srcSet: createSrcSet(variants),
        sizes,
      }}
      alt={alt}
      loading={loading}
      imageStyles={{
        className: styles['gallery-image'],
        placeholderClassName: styles['gallery-image__lowquality'],
        style: { objectFit: 'cover', width: '100%', height: '100%' },
      }}
    />
  );
};

export default GalleryImage;
