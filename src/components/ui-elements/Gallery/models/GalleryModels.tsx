export type SrcSet = {
	fullsize: string;
	w480: string;
	w768: string;
	w1024: string;
	lowQuality?: string;
};

export type Image = { src: SrcSet; alt?: string };

export type CustomGalleryProps = {
	heading: string;
	images: Image[];
};
