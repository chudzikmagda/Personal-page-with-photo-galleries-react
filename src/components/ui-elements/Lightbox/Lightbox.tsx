/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import LightboxImageComponent from './LightboxImage/LightboxImage';
import { Image } from '../Gallery/models/GalleryModels';
import { LightboxProps, SWIPE_DIRECTION } from './models/LightboxModels';
import { ReactComponent as CloseIcon } from './../../../assets/images/template/lightbox/close-icon.svg';
import { ReactComponent as NextIcon } from './../../../assets/images/template/lightbox/arrow-right.svg';
import { ReactComponent as PrevIcon } from './../../../assets/images/template/lightbox/arrow-left.svg';
import { CSSTransition } from 'react-transition-group';
import styles from './Lightbox.module.scss';

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

	const isButtonClicked = (className: string, clickedElement: HTMLElement): boolean | undefined => {
		return clickedElement.parentElement?.classList.value.includes(className);
	};

	const isImageClicked = (clickedElement: HTMLElement): boolean => {
		return clickedElement instanceof HTMLImageElement;
	};

	const onCloseLightbox = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
		const clickedElement: HTMLElement = event.target as HTMLElement;
		if (
			isImageClicked(clickedElement) ||
			isButtonClicked('lightbox__prevButton', clickedElement) ||
			isButtonClicked('lightbox__nextButton', clickedElement)
		) {
			return;
		}
		setShowImage(false);
		closeImage(false);
	};

	const handleSwipeEvent = (direction: SWIPE_DIRECTION) => {
		switch (direction) {
			case SWIPE_DIRECTION.RIGHT:
				return goToPreviousImage();
			case SWIPE_DIRECTION.LEFT:
				return goToNextImage();
		}
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
		<div onClick={(e) => onCloseLightbox(e)} className={styles.lightbox}>
			<button onClick={(e) => onCloseLightbox(e)} className={styles.lightbox__closeButton}>
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
						<LightboxImageComponent
							onSwipe={(e) => handleSwipeEvent(e)}
							src={imageCollection[index].src}
							alt={imageCollection[index].alt}
						/>
					</div>
				</CSSTransition>
			</div>
			<button onClick={goToPreviousImage} className={styles.lightbox__prevButton}>
				<PrevIcon />
			</button>
			<button onClick={goToNextImage} className={styles.lightbox__nextButton}>
				<NextIcon />
			</button>
		</div>
	);
};

export default Lightbox;
