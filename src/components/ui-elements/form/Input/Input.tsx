import React from 'react';
import styles from './Input.module.scss';
import { InputProps } from './models/InputModel';

const Input: React.FC<InputProps> = ({ error, id, label, placeholder, required, value, onValueChange }) => {
	const onInputValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		onValueChange(event.target.value);
	};

	return (
		<div className={styles.input}>
			<label className={styles.input__label} htmlFor={id}>
				{label}
				{required && (
					<>
						<span className={styles.input__asterix}>*</span>
					</>
				)}
			</label>
			<div className={styles.input__wrapper}>
				<input type="text" value={value} className={styles.input__element} placeholder={placeholder} id={id} onChange={onInputValueChange} />
				<span className={styles.input__error}>{error}</span>
			</div>
		</div>
	);
};

export default Input;
