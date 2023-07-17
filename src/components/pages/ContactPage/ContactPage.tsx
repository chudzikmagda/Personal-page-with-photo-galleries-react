import React, { useState } from 'react';
import Input from '../../ui-elements/Input/Input';
import Button from '../../ui-elements/Button/Button';
import { ContactForm, ContactFormValue } from './models/ContactPage.model';
import styles from './ContactPage.module.scss';
import { t } from 'i18next';
import Layout from '../../Layout/Layout';
import Textarea from '../../ui-elements/Textarea/Textarea';

const ContactPage: React.FC = () => {
	const initialContactFormValues: ContactForm = {
		email: { value: '', error: '' },
		name: { value: '', error: '' },
		message: { value: '', error: '' }
	};

	const [contactFormValues, setContactFormValues] = useState(initialContactFormValues);

	const sendForm = (): void => {
		console.log(contactFormValues);
	};

	const resetForm = (): void => {
		setContactFormValues(initialContactFormValues);
	};

	const isButtonDisabled = (): boolean => {
		return !Object.values(contactFormValues).every((contactFormValue: ContactFormValue) => {
			return contactFormValue.value && !contactFormValue.error;
		});
	};

	const onInputValueChange = (value: string, inputName: string): void => {
		setContactFormValues({ ...contactFormValues, [inputName]: { value: value, error: setValidation(value) } });
	};

	const setValidation = (value: string): string => {
		let errorMsg = '';

		if (!value) {
			errorMsg += `${t('ContactPage.form.error.required')} `;
		}

		if (value.length < 2) {
			errorMsg += `${t('ContactPage.form.error.minLength')} `;
		}
		return errorMsg;
	};

	return (
		<Layout
			content={
				<div className={styles['wrapper-s']}>
					<h1>{t('ContactPage.heading')}</h1>
					<form className={styles['contact-form']}>
						<span className={styles['contact-form__info']}>{t('ContactPage.form.info')}</span>
						<Input
							id="name"
							label={t('ContactPage.form.nameInput.label')}
							placeholder={t('ContactPage.form.nameInput.placeholder')}
							value={contactFormValues.name.value}
							error={contactFormValues.name.error}
							required={true}
							onValueChange={(value: string) => onInputValueChange(value, 'name')}
						/>
						<Input
							id="email"
							value={contactFormValues.email.value}
							label={t('ContactPage.form.emailInput.label')}
							placeholder={t('ContactPage.form.emailInput.placeholder')}
							error={contactFormValues.email.error}
							required={true}
							onValueChange={(value: string) => onInputValueChange(value, 'email')}
						/>
						<Textarea
							id="message"
							label={t('ContactPage.form.textarea.label')}
							placeholder={t('ContactPage.form.textarea.placeholder')}
							value={contactFormValues.message.value}
							error={contactFormValues.message.error}
							required={true}
							onValueChange={(value: string) => onInputValueChange(value, 'message')}
						/>
						<div className={styles['contact-form__buttons']}>
							<Button type="reset" apperance="text" cta={t('ContactPage.form.resetButton')} onClick={resetForm} />
							<Button type="submit" cta={t('ContactPage.form.submitButton')} disabled={isButtonDisabled()} onClick={sendForm} />
						</div>
					</form>
				</div>
			}
		/>
	);
};

export default ContactPage;
