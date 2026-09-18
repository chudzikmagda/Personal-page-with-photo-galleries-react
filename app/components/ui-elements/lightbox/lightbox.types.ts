import type { GalleryImageType } from '~/components/ui-elements/gallery/components/gallery-image/gallery-image.types';

export type LightboxProps = {
  currentIndex: number;
  images: GalleryImageType[];
  closeImage: (state: boolean) => void;
};
