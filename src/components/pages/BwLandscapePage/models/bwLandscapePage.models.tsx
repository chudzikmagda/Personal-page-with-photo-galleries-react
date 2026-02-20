import type { GalleryImageType } from '../../../ui-elements/Gallery/GalleryImage/models/galleryImage.models';
import { galleryBuilder } from '../../../../shared/utils/galleryBuilder.utils';
// @ts-expect-error: Vite feature
const images = import.meta.glob('../../../../assets/images/galleries/landscapes/black-and-white/*.webp', {
	eager: true,
	import: 'default'
});

export const bwImages: GalleryImageType[] = galleryBuilder(images, 'Black and white landscape photography');
