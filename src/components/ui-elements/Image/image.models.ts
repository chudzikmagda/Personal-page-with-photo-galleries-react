export type Image = {
	src: string;
	width: number;
	height: number;
	aspectRatio: number;
};

export enum ImageLoading {
	Eager = 'eager',
	Lazy = 'lazy'
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src?: string;
	srcSet?: string;
	className?: string;
	style?: React.CSSProperties;
	alt: string;
	loading?: ImageLoading;
	onClick?: React.MouseEventHandler<HTMLImageElement>;
	onTouchStart?: React.TouchEventHandler<HTMLImageElement>;
	onTouchEnd?: React.TouchEventHandler<HTMLImageElement>;
}
