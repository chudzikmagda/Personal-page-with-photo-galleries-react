import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../Button/Button';
import { ButtonType } from '../../Button/button.types';
import Input from '../Input/Input';
import { InputType } from '../Input/input.types';
import styles from './passwordForm.module.scss';
import { PasswordFormProps } from './passwordForm.types';

const PasswordForm: React.FC<PasswordFormProps> = ({ translations, password, error, onSubmit, onPasswordChange }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.protectedRoute}>
			<div className={styles.protectedRoute__panel}>
				<h1 className={styles.protectedRoute__title}>{t(translations.titleKey)}</h1>
				<p className={styles.protectedRoute__description}>{t(translations.descriptionKey)}</p>

				<form className={styles.protectedRoute__form} onSubmit={onSubmit}>
					<Input
						id="passwordForm"
						label={t(translations.labelKey)}
						name="password"
						type={InputType.PASSWORD}
						autoComplete="current-password"
						value={password}
						error={error}
						onValueChange={onPasswordChange}
					/>
					<div className={styles.protectedRoute__actions}>
						<Button cta={t(translations.submitCtaKey)} type={ButtonType.SUBMIT} />
					</div>
				</form>
			</div>
		</div>
	);
};

export default PasswordForm;
