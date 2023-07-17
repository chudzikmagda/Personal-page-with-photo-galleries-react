import React from 'react';
import styles from './Textarea.module.scss';
import { TextareaProps } from './models/TextareaModel';

const Textarea: React.FC<TextareaProps> = (props) => {
	const onValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		props.onValueChange(event.target.value);
	};

	return (
		<div className={styles.textarea}>
			<label className={styles.textarea__label} htmlFor={props.id}>
				{props.label}
				{props.required && (
					<>
						<span className={styles.textarea__asterix}>*</span>
					</>
				)}
			</label>
			<div className={styles.textarea__wrapper}>
				<textarea
					value={props.value}
					className={styles.textarea__element}
					placeholder={props.placeholder}
					id={props.id}
					onChange={onValueChange}
				/>
				<span className={styles.textarea__error}>{props.error}</span>
			</div>
		</div>
	);
};

export default Textarea;
