export interface Image {
	src: string;
	width: number;
	height: number;
	aspectRatio: number;
}

export enum ImageDimension {
	W480 = '480w',
	W768 = '768w',
	W1024 = '1024w',
	LOW_QUALITY = 'lowQuality',
	FULLSIZE = 'fullsize'
}

export type ImageVariants = {
	[key in ImageDimension]: Image;
};
