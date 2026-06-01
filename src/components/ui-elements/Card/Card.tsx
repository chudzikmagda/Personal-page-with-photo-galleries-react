import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';
import { CardProps } from './card.types';

const Card: React.FC<CardProps> = ({ bgImage, cta, path, title }) => {
	return (
		<div className={styles.card}>
			<Link to={path} className={styles.card__link} aria-label={title}></Link>
			<div className={styles.card__details}>
				<span className={styles.card__ornament} aria-hidden="true"></span>
				<h2 className={styles.card__title}>{title}</h2>
				<p className={styles.card__cta}>{cta}</p>
			</div>
			<div className={styles.card__bg} style={{ backgroundImage: `url(${bgImage})` }}></div>
		</div>
	);
};

export default Card;
