import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './models/CardProps';
import { Link } from 'react-router-dom';

const Card: React.FC<CardProps> = ({ bgImage, description, path, title }) => {
	return (
		<div className={styles.card}>
			<Link to={path} className={styles.card__link}></Link>
			<div className={styles.card__details}>
				<h2 className={styles.card__title}>{title}</h2>
				<p className={styles.card__description}>{description}</p>
			</div>
			<div className={styles.card__bg} style={{ backgroundImage: `url(${bgImage})` }}></div>
		</div>
	);
};

export default Card;
