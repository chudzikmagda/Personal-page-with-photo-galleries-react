export type Image = { src: string; width?: number; height?: number; alt?: string };

export type CustomGalleryProps = {
	heading: string;
	images: Image[];
};
