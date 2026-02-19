export enum ImageLoading {
	Eager = 'eager',
	Lazy = 'lazy'
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	className?: string;
	style?: React.CSSProperties;
	loading?: ImageLoading;
	onClick?: React.MouseEventHandler<HTMLImageElement>;
	onTouchStart?: React.TouchEventHandler<HTMLImageElement>;
	onTouchEnd?: React.TouchEventHandler<HTMLImageElement>;
}
