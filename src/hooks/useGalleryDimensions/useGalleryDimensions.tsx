import { useState, useEffect } from 'react';
import { GalleryImageType } from '../../components/ui-elements/Gallery/GalleryImage/models/galleryImage.models';

const loadGalleryDimensions = async (gallery: GalleryImageType[]): Promise<GalleryImageType[]> => {
	const imageLoaders = gallery.map(
		(img: GalleryImageType) =>
			new Promise<GalleryImageType>((resolve) => {
				const image: HTMLImageElement = new Image();
				image.onload = () => {
					resolve({
						...img,
						width: image.naturalWidth,
						height: image.naturalHeight,
						aspectRatio: image.naturalWidth / image.naturalHeight
					});
				};
				image.src = img.src.fullsize;
			})
	);
	return Promise.all(imageLoaders);
};

export const useGalleryDimensions = (initialGallery: GalleryImageType[]): GalleryImageType[] => {
	const [enrichedGallery, setEnrichedGallery] = useState<GalleryImageType[]>([]);

	useEffect(() => {
		loadGalleryDimensions(initialGallery).then(setEnrichedGallery);
	}, [initialGallery]);

	return enrichedGallery;
};
