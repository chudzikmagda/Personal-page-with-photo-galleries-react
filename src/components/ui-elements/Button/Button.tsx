/* eslint-disable indent */
import React, { useMemo } from 'react';
import { ButtonProps } from './models/Button.model';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ apperance, cta, disabled, type, onClick }) => {
	const classNames: string = useMemo(() => {
		let classes = `${styles.btn} `;

		switch (apperance) {
			case 'primary-solid':
				return (classes += styles['btn--primary-solid']);
			case 'secondary-solid':
				return (classes += styles['btn--secondary-solid']);
			case 'primary-outline':
				return (classes += styles['btn--primary-outline']);
			case 'secondary-outline':
				return (classes += styles['btn--secondary-outline']);
			case 'text':
				return (classes += styles['btn--text']);
		}

		return classNames;
	}, [apperance]);

	return (
		<button type={type} className={classNames} disabled={disabled} onClick={onClick}>
			{cta}
		</button>
	);
};

Button.defaultProps = {
	apperance: 'primary-solid',
	disabled: false,
	type: 'button'
};

export default Button;
