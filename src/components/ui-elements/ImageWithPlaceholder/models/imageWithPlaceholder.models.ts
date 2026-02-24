import { ImageLoading } from '../../Image/models/image.models';

export interface ImageSources {
	lowQualitySrc: string;
	fullSizeSrc: string;
	srcSet?: string;
}

export interface ImageStyles {
	className?: string;
	placeholderClassName?: string;
	style?: React.CSSProperties;
}

export interface ImageWithPlaceholderProps {
	imageSources: ImageSources;
	alt: string;
	imageStyles?: ImageStyles;
	loading?: ImageLoading;
	onLoad?: () => void;
	onTouchStart?: (e: React.TouchEvent<HTMLImageElement>) => void;
	onTouchEnd?: (e: React.TouchEvent<HTMLImageElement>) => void;
}
