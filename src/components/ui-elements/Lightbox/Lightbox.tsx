/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { LightboxProps } from './models/LightboxModels';
import { Image } from '../Gallery/models/GalleryModels';
import styles from './Lightbox.module.scss';
import { ReactComponent as CloseIcon } from './../../../assets/images/template/lightbox/close-icon.svg';
import { ReactComponent as NextIcon } from './../../../assets/images/template/lightbox/arrow-right.svg';
import { ReactComponent as PrevIcon } from './../../../assets/images/template/lightbox/arrow-left.svg';

const Lightbox: React.FC<LightboxProps> = ({ currentIndex, images, closeImage }) => {
	const imageCollection: Image[] = images;
	const [index, setIndex] = useState<number>(currentIndex);

	const goToNextImage = (): void => {
		setIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const goToPreviousImage = (): void => {
		setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	useEffect((): (() => void) => {
		const onKeyDownClick = (event: KeyboardEvent): void => {
			switch (event.key) {
				case 'Escape':
					return closeImage(false);
				case 'ArrowLeft':
					return goToPreviousImage();
				case 'ArrowRight':
					return goToNextImage();
			}
		};
		document.addEventListener('keydown', onKeyDownClick);

		return () => {
			document.removeEventListener('keydown', onKeyDownClick);
		};
	});

	return (
		<div className={styles.lightbox}>
			<button className={styles.lightbox__closeButton} onClick={() => closeImage(false)}>
				<CloseIcon />
			</button>
			<div className={styles['lightbox__image-wrapper']}>
				<img src={imageCollection[index].src} className={styles.lightbox__image} alt={imageCollection[index].alt} />
			</div>
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
