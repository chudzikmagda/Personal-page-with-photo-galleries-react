/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import { LightboxProps } from './models/LightboxModels';
import { Image } from '../Gallery/models/GalleryModels';
import { ReactComponent as CloseIcon } from './../../../assets/images/template/lightbox/close-icon.svg';
import { ReactComponent as NextIcon } from './../../../assets/images/template/lightbox/arrow-right.svg';
import { ReactComponent as PrevIcon } from './../../../assets/images/template/lightbox/arrow-left.svg';
import { CSSTransition } from 'react-transition-group';
import styles from './Lightbox.module.scss';
import ImageComponent from './Image/Image';

const Lightbox: React.FC<LightboxProps> = ({ currentIndex, images, closeImage }) => {
	const imageCollection: Image[] = images;
	const imageRef = useRef<HTMLDivElement | null>(null);
	const [index, setIndex] = useState<number>(currentIndex);
	const [showImage, setShowImage] = useState<boolean>(true);

	const goToNextImage = (): void => {
		setShowImage(false);

		setTimeout(() => {
			setIndex((prevIndex) => (prevIndex + 1) % images.length);
			setShowImage(true);
		}, 200);
	};

	const goToPreviousImage = (): void => {
		setShowImage(false);

		setTimeout(() => {
			setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
			setShowImage(true);
		}, 200);
	};

	const onCloseLightbox = (): void => {
		setShowImage(false);
		closeImage(false);
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
			<button className={styles.lightbox__closeButton} onClick={onCloseLightbox}>
				<CloseIcon />
			</button>
			<div className={styles['lightbox__image-wrapper']}>
				<CSSTransition
					in={showImage}
					timeout={200}
					classNames={{
						enter: styles['lightbox__image-enter'],
						enterActive: styles['lightbox__image-enter--active'],
						exit: styles['lightbox__image-exit'],
						exitActive: styles['lightbox__image-exit--active']
					}}
					nodeRef={imageRef}
					unmountOnExit>
					<div ref={imageRef}>
						<ImageComponent src={imageCollection[index].src} alt={imageCollection[index].alt} />
					</div>
				</CSSTransition>
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
