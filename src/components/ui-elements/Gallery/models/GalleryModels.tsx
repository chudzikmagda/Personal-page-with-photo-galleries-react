export type Image = { src: string; width?: number; height?: number; alt?: string };

export type CustomGalleryProps = {
	id: string;
	heading: string;
	images: Image[];
};
