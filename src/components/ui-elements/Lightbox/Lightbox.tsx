/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PrevIcon from './../../../assets/images/template/lightbox/arrow-left.svg?react';
import NextIcon from './../../../assets/images/template/lightbox/arrow-right.svg?react';
import CloseIcon from './../../../assets/images/template/lightbox/close-icon.svg?react';
import styles from './Lightbox.module.scss';
import LightboxImageComponent from './LightboxImage/LightboxImage';
import { SWIPE_DIRECTION } from './LightboxImage/models/lightboxImage.models';
import { LightboxProps } from './models/lightbox.models';

const Lightbox: React.FC<LightboxProps> = ({ currentIndex, images, closeImage }) => {
	const imageRef = useRef<HTMLDivElement | null>(null);
	const [index, setIndex] = useState<number>(currentIndex);
	const [showImage, setShowImage] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setTimeout(() => setIsOpen(true), 10);
	}, []);

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
		<div
			onClick={(e: React.MouseEvent<HTMLDivElement>) => onCloseLightbox(e)}
			className={`${styles.lightbox} ${styles['lightbox-animation']} ${isOpen ? styles['lightbox-animation--open'] : ''}`}>
			<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => onCloseLightbox(e)} className={styles.lightbox__closeButton}>
				<CloseIcon />
			</button>
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
				<div className={styles['lightbox__image-wrapper']}>
					<div ref={imageRef} className={styles['lightbox__image-container']}>
						<LightboxImageComponent
							variants={images[index].variants}
							alt={images[index].alt}
							onSwipe={(direction: SWIPE_DIRECTION) => handleSwipeEvent(direction)}
						/>
					</div>
				</div>
			</CSSTransition>
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
