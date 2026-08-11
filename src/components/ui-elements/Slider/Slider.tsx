/* eslint-disable simple-import-sort/imports */
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
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
				<div className={styles.slider__inner}>
					<Swiper
						loop
						slidesPerView="auto"
						spaceBetween={16}
						slideToClickedSlide
						watchSlidesProgress
						pagination={{
							clickable: true,
							el: '.' + styles.slider__pagination
						}}
						navigation={true}
						keyboard={{ enabled: true, onlyInViewport: false }}
						modules={[Keyboard, Navigation, Pagination]}
						className={styles.slider__swiper}>
						{images.map(({ id, alt, variants }) => {
							return (
								<SwiperSlide key={id} className={styles.slider__slide}>
									<img
										className={styles.slider__image}
										src={variants.fullsize.src}
										srcSet={createSrcSet(variants)}
										sizes={`(max-width: ${Breakpoints.MEDIUM}px) 82vw, (max-width: ${Breakpoints.XLARGE}px) 56vw, 720px`}
										alt={alt}
										loading={'lazy'}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<div className={styles.slider__pagination} />
				</div>
			)}
		</div>
	);
};

export default Slider;
