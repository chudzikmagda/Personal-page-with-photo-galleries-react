import React from 'react';
import { ImageProps } from '../models/LightboxModels';
import styles from './Image.module.scss';

const ImageComponent: React.FC<ImageProps> = ({ src, alt }) => {
	return <img src={src} className={styles.image} alt={alt} />;
};

export default ImageComponent;
