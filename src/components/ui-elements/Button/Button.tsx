/* eslint-disable indent */
import React, { useMemo } from 'react';
import { ButtonProps } from './models/Button.model';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = (props) => {
	const classNames: string = useMemo(() => {
		let classes = `${styles.btn} `;

		switch (props.apperance) {
			case 'primary-solid':
				return (classes += styles['btn--primary-solid']);
			case 'secondary-solid':
				return (classes += styles['btn--secondary-solid']);
			case 'primary-outline':
				return (classes += styles['btn--primary-outline']);
			case 'secondary-outline':
				return (classes += styles['btn--secondary-outline']);
		}

		return classNames;
	}, [props.apperance]);

	return (
		<button type="button" className={classNames} onClick={props.onClick}>
			{props.cta}
		</button>
	);
};

export default Button;
