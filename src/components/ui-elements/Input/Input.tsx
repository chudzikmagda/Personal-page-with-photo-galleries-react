import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './models/InputModel';

const Input: React.FC<InputProps> = (props) => {
	const onValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		props.onValueChange(event.target.value);
	};

	return (
		<div className={styles.input}>
			<label className={styles.input__label} htmlFor={props.id}>
				{props.label}
				{props.required && (
					<>
						<span className={styles.input__asterix}>*</span>
					</>
				)}
			</label>
			<div className={styles.input__wrapper}>
				<input
					type="text"
					value={props.value}
					className={styles.input__element}
					placeholder={props.placeholder}
					id={props.id}
					onChange={onValueChange}
				/>
				<span className={styles.input__error}>{props.error}</span>
			</div>
		</div>
	);
};

export default Input;
