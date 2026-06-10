/* eslint-disable simple-import-sort/imports */
import React from 'react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Keyboard, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useIsMobile } from '../../../hooks/useIsMobile/useIsMobile';
import { Breakpoints } from '../../../shared/types/breakpoints.types';
import { GalleryItem } from '../../../shared/types/gallery.types';
import { createSrcSet } from '../../../shared/utils/imageUtils';
import styles from './slider.module.scss';
import { SliderProps } from './slider.types';

const Slider: React.FC<SliderProps> = ({ images }) => {
	const isMobile: boolean = useIsMobile(Breakpoints.MEDIUM);

	const getImageProps = ({ alt, variants }: Pick<GalleryItem, 'alt' | 'variants'>, sizes: string) => ({
		src: variants.fullsize.src,
		srcSet: createSrcSet(variants),
		sizes,
		alt,
		loading: 'lazy' as const
	});

	return (
		<div className={styles.slider}>
			{isMobile ? (
				<div className={styles.slider__mobileList}>
					{images.map(({ id, alt, variants }) => {
						return (
							<img
								key={id}
								className={styles.slider__mobileImage}
								{...getImageProps(
									{ alt, variants },
									`(max-width: ${Breakpoints.MEDIUM}px) 100vw, (max-width: ${Breakpoints.XLARGE}px) 56vw, 720px`
								)}
							/>
						);
					})}
				</div>
			) : (
				<Swiper
					slidesPerView="auto"
					spaceBetween={16}
					slideToClickedSlide
					watchSlidesProgress
					scrollbar={{ draggable: true, hide: false }}
					keyboard={{ enabled: true, onlyInViewport: false }}
					modules={[Keyboard, Scrollbar]}
					className={styles.slider__swiper}>
					{images.map(({ id, alt, variants }) => {
						return (
							<SwiperSlide key={id} className={styles.slider__slide}>
								<img
									className={styles.slider__image}
									{...getImageProps(
										{ alt, variants },
										`(max-width: ${Breakpoints.MEDIUM}px) 82vw, (max-width: ${Breakpoints.XLARGE}px) 56vw, 720px`
									)}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</div>
	);
};

export default Slider;
