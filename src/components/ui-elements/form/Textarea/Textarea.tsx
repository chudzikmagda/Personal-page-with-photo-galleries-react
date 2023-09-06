import React from 'react';
import styles from './Textarea.module.scss';
import { TextareaProps } from './models/TextareaModel';

const Textarea: React.FC<TextareaProps> = ({ error, id, label, name, placeholder, required, value, onValueChange }) => {
	const onTextareaValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		onValueChange(event.target.value);
	};

	return (
		<div className={styles.textarea}>
			<label className={styles.textarea__label} htmlFor={id}>
				{label}
				{required && (
					<>
						<span className={styles.textarea__asterix}>*</span>
					</>
				)}
			</label>
			<div className={styles.textarea__wrapper}>
				<textarea
					id={id}
					name={name}
					value={value}
					className={styles.textarea__element}
					placeholder={placeholder}
					onChange={onTextareaValueChange}
				/>
				<span className={styles.textarea__error}>{error}</span>
			</div>
		</div>
	);
};

export default Textarea;
