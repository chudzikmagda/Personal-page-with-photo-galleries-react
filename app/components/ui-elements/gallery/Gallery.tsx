import React, { useRef, useState, type JSX } from 'react';

import { useResizeObserver } from '~/hooks/useResizeObserver/useResizeObserver';
import { ImageDimension, type ImageVariants } from '~/shared/types/image.types';
import { ImageLoading } from '~/components/ui-elements/image/image.types';
import Lightbox from '~/components/ui-elements/lightbox/Lightbox';
import Spinner from '~/components/ui-elements/spinner/Spinner';
import GalleryImage from './components/gallery-image/GalleryImage';
import type { GalleryImageType } from './components/gallery-image/gallery-image.types';
import styles from './gallery.module.scss';
import {
  GALLERY_FALLBACK_WIDTH,
  GALLERY_GAP,
  GALLERY_ROW_HEIGHT,
  type GalleryCurrentRow,
  type GalleryProps,
  type GalleryRowParams,
  type GalleryRows,
} from './gallery.types';

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

const addImageToRow = ({
  image,
  currentRow,
  currentRowWidth,
  galleryRows,
  containerWidth,
  targetRowHeight,
}: GalleryRowParams): GalleryCurrentRow => {
  const projectedWidth: number = targetRowHeight * getImageAspectRatio(image);
  const totalGapWidth: number = GALLERY_GAP * currentRow.length;
  if (currentRowWidth + projectedWidth + totalGapWidth > containerWidth && currentRow.length > 0) {
    galleryRows.push(currentRow);
    return { currentRow: [image], currentRowWidth: projectedWidth };
  }
  return {
    currentRow: [...currentRow, image],
    currentRowWidth: currentRowWidth + projectedWidth,
  };
};

const getTotalAspectRatio = (row: GalleryImageType[]): number =>
  row.reduce((sum, img) => sum + getImageAspectRatio(img), 0);

const Gallery: React.FC<GalleryProps> = ({ heading, images }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryContainerRef: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(
    null
  );
  const { width: measuredWidth, height: containerHeight } = useResizeObserver(galleryContainerRef);

  const containerWidth = measuredWidth || GALLERY_FALLBACK_WIDTH;

  const openGallery = (index: number): void => {
    setCurrentIndex(index);
    setIsImageOpen(true);
  };

  const buildGalleryRows = (targetRowHeight: number): GalleryRows => {
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
        containerWidth,
        targetRowHeight,
      });
      currentRow = result.currentRow;
      currentRowWidth = result.currentRowWidth;
    });

    if (currentRow.length) rows.push(currentRow);
    return rows;
  };

  const getRowHeight = (
    row: GalleryImageType[],
    rowIndex: number,
    rows: GalleryRows,
    targetRowHeight: number
  ): number =>
    rowIndex === rows.length - 1
      ? targetRowHeight
      : (containerWidth - GALLERY_GAP * (row.length - 1)) / getTotalAspectRatio(row);

  const getRowsTotalHeight = (rows: GalleryRows, targetRowHeight: number): number =>
    rows.reduce((sum, row, index) => sum + getRowHeight(row, index, rows, targetRowHeight), 0) +
    GALLERY_GAP * Math.max(rows.length - 1, 0);

  const computeFilledGalleryRows = (): { rows: GalleryRows; targetRowHeight: number } => {
    let targetHeight = GALLERY_ROW_HEIGHT;
    let rows = buildGalleryRows(targetHeight);
    let rowsHeight = getRowsTotalHeight(rows, targetHeight);

    if (!containerHeight || rowsHeight <= 0 || rowsHeight >= containerHeight) {
      return { rows, targetRowHeight: targetHeight };
    }

    const maxIterations = 4;
    for (let i = 0; i < maxIterations && rowsHeight < containerHeight; i++) {
      targetHeight *= containerHeight / rowsHeight;
      rows = buildGalleryRows(targetHeight);
      rowsHeight = getRowsTotalHeight(rows, targetHeight);
    }

    if (rowsHeight > containerHeight) {
      targetHeight *= containerHeight / rowsHeight;
      rows = buildGalleryRows(targetHeight);
    }

    return { rows, targetRowHeight: targetHeight };
  };

  const { rows: galleryRows, targetRowHeight } = computeFilledGalleryRows();

  const isLastRow = (rowIndex: number): boolean => rowIndex === galleryRows.length - 1;
  const eagerImagesCount = 4;

  const renderRow = (row: GalleryImageType[], rowIndex: number, globalStartIndex: number) => {
    const isLastRowFlag = isLastRow(rowIndex);
    const dynamicRowHeight = isLastRowFlag
      ? targetRowHeight
      : (containerWidth - GALLERY_GAP * (row.length - 1)) / getTotalAspectRatio(row);

    return (
      <div
        key={`row-${rowIndex}`}
        className={`${styles.gallery__row} ${isLastRowFlag ? styles['gallery__row--last'] : ''}`}
      >
        {row.map((image: GalleryImageType, index: number) => {
          const currentImageIndex = globalStartIndex + index;
          const imageWidth = dynamicRowHeight * getImageAspectRatio(image);
          return (
            <div
              key={image.id}
              className={`${styles.gallery__item} ${isLastRowFlag ? styles['gallery__item--last'] : ''}`}
              style={{
                height: dynamicRowHeight,
                width: imageWidth,
                marginRight: isLastRowFlag && index < row.length - 1 ? `${GALLERY_GAP}px` : 0,
              }}
            >
              <div
                onClick={() => openGallery(globalStartIndex + index)}
                style={{ width: '100%', height: '100%' }}
              >
                <GalleryImage
                  {...image}
                  loading={
                    currentImageIndex < eagerImagesCount ? ImageLoading.Eager : ImageLoading.Lazy
                  }
                  sizes={`${Math.ceil(imageWidth)}px`}
                />
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
          <div className={styles['gallery__spinner-wrapper']}>
            <Spinner />
          </div>
        )}
      </div>

      {isImageOpen && (
        <Lightbox
          currentIndex={currentIndex}
          images={images}
          closeImage={() => setIsImageOpen(false)}
        />
      )}
    </>
  );
};

export default Gallery;
