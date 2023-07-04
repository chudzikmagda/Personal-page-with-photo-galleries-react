import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import { CustomGalleryProps, Image } from './models/GalleryModels';
import Lightbox from '../Lightbox/Lightbox';

const CustomGallery: React.FC<CustomGalleryProps> = (props) => {
	const images: Image[] = props.images;
	const [isImageOpen, setIsImageOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<>
			<h3 className={styles.gallery__heading}>{props.heading}</h3>
			<div className={styles.gallery}>
				{images.map((image: Image, index: number) => {
					return (
						<div key={index} className={styles.gallery__item}>
							<img
								src={image.src}
								className={styles.gallery__thumbnail}
								onClick={() => {
									setIsImageOpen(true);
									setCurrentIndex(index);
								}}
								alt={image.alt}
							/>
						</div>
					);
				})}
			</div>
			{isImageOpen && <Lightbox currentIndex={currentIndex} images={images} closeImage={(state: boolean) => setIsImageOpen(state)} />}
		</>
	);
};

export default CustomGallery;
