import React, { ReactElement } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './models/CardProps';
import { Link } from 'react-router-dom';

const Card = (props: CardProps): ReactElement => {
	return (
		<div className={styles.card}>
			<Link to={props.path} className={styles.card__link}></Link>
			<div className={styles.card__details}>
				<h2 className={styles.card__title}>{props.title}</h2>
				<p className={styles.card__description}>{props.description}</p>
			</div>
			<div className={styles.card__bg} style={{ backgroundImage: `url(${props.bgImage})` }}></div>
		</div>
	);
};

export default Card;
