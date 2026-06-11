import React from 'react';

import styles from './input.module.scss';
import { InputProps, InputType } from './input.types';

const Input: React.FC<InputProps> = ({
	autoComplete,
	error,
	id,
	label,
	name,
	placeholder,
	required,
	type = InputType.TEXT,
	value,
	onValueChange
}) => {
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
				<input
					type={type}
					id={id}
					name={name}
					value={value}
					className={styles.input__element}
					placeholder={placeholder}
					autoComplete={autoComplete}
					onChange={onInputValueChange}
				/>
				<span className={styles.input__error}>{error}</span>
			</div>
		</div>
	);
};

export default Input;
