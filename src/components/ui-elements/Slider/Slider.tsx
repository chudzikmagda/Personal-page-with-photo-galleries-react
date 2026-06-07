/* eslint-disable simple-import-sort/imports */
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Keyboard, Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { createSrcSet } from '../../../shared/utils/imageUtils';
import styles from './Slider.module.scss';
import { SliderProps } from './slider.types';

const Slider: React.FC<SliderProps> = ({ images }) => {
	return (
		<div className={styles.flipbook}>
			<Swiper
				slidesPerView={'auto'}
				spaceBetween={16}
				slideToClickedSlide
				grabCursor
				navigation
				scrollbar={{ draggable: true, hide: false }}
				keyboard={{ enabled: true, onlyInViewport: false }}
				mousewheel={{ enabled: true, forceToAxis: false, releaseOnEdges: true }}
				modules={[Navigation, Keyboard, Mousewheel, Scrollbar]}
				className={styles.flipbook__swiper}>
				{images.map(({ id, alt, variants }) => (
					<SwiperSlide key={id} className={styles.flipbook__slide}>
						<img
							className={styles.flipbook__image}
							src={variants.fullsize.src}
							srcSet={createSrcSet(variants)}
							sizes="(max-width: 767px) 82vw, (max-width: 1280px) 56vw, 720px"
							alt={alt}
							loading="lazy"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
