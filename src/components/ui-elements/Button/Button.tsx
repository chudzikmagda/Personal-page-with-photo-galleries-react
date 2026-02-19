/* eslint-disable indent */
import React, { useMemo } from 'react';
import { ButtonApperance, ButtonProps, ButtonType } from './models/button.models';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ apperance = ButtonApperance.PRIMARY_SOLID, cta, disabled = false, type = ButtonType.BUTTON, onClick }) => {
	const classNames: string = useMemo(() => {
		let classes = `${styles.btn} `;

		switch (apperance) {
			case ButtonApperance.PRIMARY_SOLID:
				return (classes += styles['btn--primary-solid']);
			case ButtonApperance.SECONDARY_SOLID:
				return (classes += styles['btn--secondary-solid']);
			case ButtonApperance.PRIMARY_OUTLINE:
				return (classes += styles['btn--primary-outline']);
			case ButtonApperance.SECONDARY_OUTLINE:
				return (classes += styles['btn--secondary-outline']);
			case ButtonApperance.TEXT:
				return (classes += styles['btn--text']);
		}

		return classes;
	}, [apperance]);

	return (
		<button type={type} className={classNames} disabled={disabled} onClick={onClick}>
			{cta}
		</button>
	);
};

export default Button;
