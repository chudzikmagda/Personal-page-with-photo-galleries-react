import React, { JSX, useMemo, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useResizeObserver } from '../../../hooks/useResizeObserver/useResizeObserver';
import Lightbox from '../Lightbox/Lightbox';
import Spinner from '../Spinner/Spinner';
import styles from './Gallery.module.scss';
import GalleryImage from './GalleryImage/GalleryImage';
import { GalleryImageType } from './GalleryImage/models/galleryImage.models';
import { GALLERY_GAP, GALLERY_ROW_HEIGHT, GalleryCurrentRow, GalleryProps, GalleryRowParams, GalleryRows } from './models/gallery.models';
import { ImageDimension, ImageVariants } from '../../../shared/models/image.models';

const Gallery: React.FC<GalleryProps> = ({ heading, images }) => {
	const [isImageOpen, setIsImageOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const lightboxRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
	const galleryContainerRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
	const containerWidth: number = useResizeObserver(galleryContainerRef);

	const openGallery = (index: number): void => {
		setCurrentIndex(index);
		setIsImageOpen(true);
	};

	const getImageAspectRatio = (image: GalleryImageType): number => {
		const variant: ImageVariants = image.variants;
		return (
			variant[ImageDimension.FULLSIZE]?.aspectRatio ||
			variant[ImageDimension.W1024]?.aspectRatio ||
			variant[ImageDimension.W768]?.aspectRatio ||
			variant[ImageDimension.W480]?.aspectRatio ||
			1
		);
	};

	const addImageToRow = ({ image, currentRow, currentRowWidth, galleryRows, containerWidth }: GalleryRowParams): GalleryCurrentRow => {
		const projectedWidth: number = GALLERY_ROW_HEIGHT * getImageAspectRatio(image);
		const totalGapWidth: number = GALLERY_GAP * currentRow.length;
		if (currentRowWidth + projectedWidth + totalGapWidth > containerWidth && currentRow.length > 0) {
			galleryRows.push(currentRow);
			return { currentRow: [image], currentRowWidth: projectedWidth };
		}
		return {
			currentRow: [...currentRow, image],
			currentRowWidth: currentRowWidth + projectedWidth
		};
	};

	const galleryRows: GalleryRows = useMemo(() => {
		if (!images.length || !containerWidth) return [];

		const rows: GalleryRows = [];
		let currentRow: GalleryImageType[] = [];
		let currentRowWidth = 0;

		images.forEach((image) => {
			const aspectRatio = getImageAspectRatio(image);
			if (!aspectRatio) return;
			const result: GalleryCurrentRow = addImageToRow({
				image,
				currentRow,
				currentRowWidth,
				galleryRows: rows,
				containerWidth
			});
			currentRow = result.currentRow;
			currentRowWidth = result.currentRowWidth;
		});

		if (currentRow.length) rows.push(currentRow);
		return rows;
	}, [images, containerWidth]);

	const getTotalAspectRatio = (row: GalleryImageType[]): number => row.reduce((sum, img) => sum + getImageAspectRatio(img), 0);
	const isLastRow = (rowIndex: number): boolean => rowIndex === galleryRows.length - 1;

	const renderRow = (row: GalleryImageType[], rowIndex: number, globalStartIndex: number) => {
		const isLastRowFlag = isLastRow(rowIndex);
		const dynamicRowHeight = isLastRowFlag ? GALLERY_ROW_HEIGHT : (containerWidth - GALLERY_GAP * (row.length - 1)) / getTotalAspectRatio(row);

		return (
			<div key={`row-${rowIndex}`} className={`${styles.gallery__row} ${isLastRowFlag && styles['gallery__row--last']}`}>
				{row.map((image: GalleryImageType, index) => {
					return (
						<div
							key={`image-${index}`}
							className={`${styles.gallery__item} ${isLastRowFlag && styles['gallery__item--last']}`}
							style={{
								height: dynamicRowHeight,
								width: dynamicRowHeight * getImageAspectRatio(image),
								marginRight: isLastRowFlag && index < row.length - 1 ? `${GALLERY_GAP}px` : 0
							}}>
							<div onClick={() => openGallery(globalStartIndex + index)} style={{ width: '100%', height: '100%' }}>
								<GalleryImage {...image} />
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	let cumulativeIndex = 0;

	return (
		<>
			<h3 className={styles.gallery__heading}>{heading}</h3>

			<div ref={galleryContainerRef} className={styles.gallery}>
				{galleryRows.length > 0 ? (
					galleryRows.map((images: GalleryImageType[], index) => {
						const row: JSX.Element = renderRow(images, index, cumulativeIndex);
						cumulativeIndex += images.length;
						return row;
					})
				) : (
					<div className={styles.gallery__spinnerWrapper}>
						<Spinner />
					</div>
				)}
			</div>

			<CSSTransition
				in={isImageOpen}
				timeout={600}
				classNames={{
					enter: styles.gallery__enter,
					enterActive: styles['gallery__enter--active'],
					exit: styles.gallery__exit,
					exitActive: styles['gallery__exit--active']
				}}
				nodeRef={lightboxRef}
				unmountOnExit>
				<div ref={lightboxRef}>
					<Lightbox currentIndex={currentIndex} images={images} closeImage={() => setIsImageOpen(false)} />
				</div>
			</CSSTransition>
		</>
	);
};

export default Gallery;
