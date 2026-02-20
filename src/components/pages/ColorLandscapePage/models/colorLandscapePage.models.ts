import type { GalleryImageType } from '../../../ui-elements/Gallery/GalleryImage/models/galleryImage.models';
import { galleryBuilder } from '../../../../shared/utils/galleryBuilder.utils';
// @ts-expect-error: Vite feature
const images = import.meta.glob('../../../../assets/images/galleries/landscapes/color/*.webp', {
	eager: true,
	import: 'default'
});

export const colorImages: GalleryImageType[] = galleryBuilder(images, 'Color landscape photography');
