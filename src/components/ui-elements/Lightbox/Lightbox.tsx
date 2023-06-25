/* eslint-disable indent */
import React, { ReactElement, useEffect, useState } from 'react';
import { LightboxProps } from './models/LightboxModels';
import { Image } from '../Gallery/models/GalleryModels';
import styles from './Lightbox.module.scss';
import { ReactComponent as CloseIcon } from './../../../assets/images/template/lightbox/close-icon.svg';
import { ReactComponent as NextIcon } from './../../../assets/images/template/lightbox/arrow-right.svg';
import { ReactComponent as PrevIcon } from './../../../assets/images/template/lightbox/arrow-left.svg';

const Lightbox = (props: LightboxProps): ReactElement => {
	const images: Image[] = props.images;
	const [index, setIndex] = useState(props.currentIndex);

	const goToNextImage = () => {
		setIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const goToPreviousImage = () => {
		setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	useEffect(() => {
		document.addEventListener('keydown', (event: KeyboardEvent) => {
			switch (event.key) {
				case 'Escape':
					return props.closeImage(false);
				case 'ArrowLeft':
					return goToPreviousImage();
				case 'ArrowRight':
					return goToNextImage();
			}
		});
	});

	return (
		<div className={styles.lightbox}>
			<button className={styles.lightbox__closeButton} onClick={() => props.closeImage(false)}>
				<CloseIcon />
			</button>
			<img src={images[index].src} className={styles.lightbox__image} />
			<button className={styles.lightbox__prevButton} onClick={goToPreviousImage}>
				<PrevIcon />
			</button>
			<button className={styles.lightbox__nextButton} onClick={goToNextImage}>
				<NextIcon />
			</button>
		</div>
	);
};

export default Lightbox;