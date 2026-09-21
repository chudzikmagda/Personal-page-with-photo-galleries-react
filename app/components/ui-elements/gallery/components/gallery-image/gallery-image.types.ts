import type { ImageLoading } from '~/components/ui-elements/image/image.types';
import type { ImageVariants } from '~/shared/types/image.types';

export interface GalleryImageType {
  id: string;
  alt: string;
  variants: ImageVariants;
  loading?: ImageLoading;
  srcSet?: string;
  sizes?: string;
}
