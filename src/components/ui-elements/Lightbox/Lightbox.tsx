import 'yet-another-react-lightbox/styles.css';

import React from 'react';
import YetAnotherLightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import { ImageDimension } from '../../../shared/types/image.types';
import { LightboxProps } from './lightbox.types';

const Lightbox: React.FC<LightboxProps> = ({ currentIndex, images, closeImage }) => {
	const slides = images
		.map((image) => {
			const fullSize = image.variants[ImageDimension.FULLSIZE];

			if (!fullSize?.src) {
				return null;
			}

			return {
				src: fullSize.src,
				width: fullSize.width,
				height: fullSize.height,
				alt: image.alt ?? 'Magda Chudzik photography'
			};
		})
		.filter((slide): slide is { src: string; width: number; height: number; alt: string } => slide !== null);

	const boundedIndex = Math.min(currentIndex, Math.max(0, slides.length - 1));

	return (
		<YetAnotherLightbox
			open
			slides={slides}
			index={boundedIndex}
			controller={{ closeOnBackdropClick: true }}
			animation={{ fade: 250, swipe: 250 }}
			carousel={{ finite: false }}
			close={() => closeImage(false)}
			plugins={[Fullscreen]}
		/>
	);
};

export default Lightbox;
