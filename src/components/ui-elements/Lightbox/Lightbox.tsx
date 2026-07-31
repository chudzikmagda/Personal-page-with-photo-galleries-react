import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import PrevIcon from './../../../assets/images/template/lightbox/arrow-left.svg?react';
import NextIcon from './../../../assets/images/template/lightbox/arrow-right.svg?react';
import CloseIcon from './../../../assets/images/template/lightbox/close-icon.svg?react';
import LightboxImageComponent from './components/LightboxImage/LightboxImage';
import { SWIPE_DIRECTION } from './components/LightboxImage/lightboxImage.types';
import styles from './lightbox.module.scss';
import { LightboxProps } from './lightbox.types';

const Lightbox: React.FC<LightboxProps> = ({ currentIndex, images, closeImage }) => {
	const OPEN_DELAY_MS = 10;
	const IMAGE_TRANSITION_MS = 200;

	const imageRef = useRef<HTMLDivElement | null>(null);
	const openTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const [index, setIndex] = useState<number>(currentIndex);
	const [showImage, setShowImage] = useState<boolean>(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		openTimeoutRef.current = setTimeout(() => setIsOpen(true), OPEN_DELAY_MS);

		return () => {
			if (openTimeoutRef.current) {
				clearTimeout(openTimeoutRef.current);
			}
			if (transitionTimeoutRef.current) {
				clearTimeout(transitionTimeoutRef.current);
			}
		};
	}, []);

	const scheduleTransition = useCallback((getNextIndex: (prevIndex: number) => number): void => {
		setShowImage(false);
		if (transitionTimeoutRef.current) {
			clearTimeout(transitionTimeoutRef.current);
		}

		transitionTimeoutRef.current = setTimeout(() => {
			setIndex((prevIndex) => getNextIndex(prevIndex));
			setShowImage(true);
			transitionTimeoutRef.current = null;
		}, IMAGE_TRANSITION_MS);
	}, []);

	const goToNextImage = useCallback((): void => {
		scheduleTransition((prevIndex) => (prevIndex + 1) % images.length);
	}, [images.length, scheduleTransition]);

	const goToPreviousImage = useCallback((): void => {
		scheduleTransition((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	}, [images.length, scheduleTransition]);

	const isButtonClicked = (className: string, clickedElement: HTMLElement): boolean | undefined => {
		return clickedElement.parentElement?.classList.value.includes(className);
	};

	const isImageClicked = (clickedElement: HTMLElement): boolean => {
		return clickedElement instanceof HTMLImageElement;
	};

	const onCloseLightbox = useCallback(
		(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>): void => {
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
		},
		[closeImage]
	);

	const handleSwipeEvent = useCallback(
		(direction: SWIPE_DIRECTION) => {
			switch (direction) {
				case SWIPE_DIRECTION.RIGHT:
					return goToPreviousImage();
				case SWIPE_DIRECTION.LEFT:
					return goToNextImage();
			}
		},
		[goToNextImage, goToPreviousImage]
	);

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
	}, [closeImage, goToNextImage, goToPreviousImage]);

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
						<LightboxImageComponent variants={images[index].variants} alt={images[index].alt} onSwipe={handleSwipeEvent} />
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
