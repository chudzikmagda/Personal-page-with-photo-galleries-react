import type { GalleryImageType } from '../../../ui-elements/Gallery/GalleryImage/models/galleryImage.models';
import { galleryBuilder } from '../../../../shared/utils/galleryBuilder.utils';
// @ts-expect-error: Vite feature
const images = import.meta.glob('../../../../assets/images/galleries/city/*.webp', {
	eager: true,
	import: 'default'
});

export const cityImages: GalleryImageType[] = galleryBuilder(
	images,
	'Street photography, urban photography, architecture, mood photography, black and white photography'
);
