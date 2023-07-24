import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import { CustomGalleryProps, Image } from './models/GalleryModels';
import Lightbox from '../Lightbox/Lightbox';

const CustomGallery: React.FC<CustomGalleryProps> = ({ heading, images }) => {
	const imageCollection: Image[] = images;
	const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	return (
		<>
			<h3 className={styles.gallery__heading}>{heading}</h3>
			<div className={styles.gallery}>
				{imageCollection.map((image: Image, index: number) => {
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
