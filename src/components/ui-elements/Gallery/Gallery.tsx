import React, { useRef, useState } from 'react';
import Lightbox from '../Lightbox/Lightbox';
import { CustomGalleryProps, Image } from './models/GalleryModels';
import { CSSTransition } from 'react-transition-group';
import styles from './Gallery.module.scss';
import ImageComponent from '../Image/Image';

const CustomGallery: React.FC<CustomGalleryProps> = ({ heading, images }) => {
	const imageCollection: Image[] = images;
	const lightboxRef = useRef<HTMLDivElement | null>(null);
	const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const openGallery = (index: number): void => {
		setIsImageOpen(true);
		setCurrentIndex(index);
	};

	const closeGallery = (): void => {
		setIsImageOpen(false);
	};

	return (
		<>
			<h3 className={styles.gallery__heading}>{heading}</h3>
			<div className={styles.gallery}>
				{imageCollection.map((image: Image, index: number) => {
					return (
						<div key={index} className={styles.gallery__item}>
							<ImageComponent src={image.src} onClick={() => openGallery(index)} />
						</div>
					);
				})}
			</div>

			<CSSTransition
				in={isImageOpen}
				timeout={600}
				classNames={{
					enter: styles['gallery__enter'],
					enterActive: styles['gallery__enter--active'],
					exit: styles['gallery__exit'],
					exitActive: styles['gallery__exit--active']
				}}
				nodeRef={lightboxRef}
				unmountOnExit>
				<div ref={lightboxRef}>
					<Lightbox currentIndex={currentIndex} images={images} closeImage={closeGallery} />
				</div>
			</CSSTransition>
		</>
	);
};

export default CustomGallery;
