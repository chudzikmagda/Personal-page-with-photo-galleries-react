import React, { useState } from 'react';
import Button from '../../ui-elements/Button/Button';
import Layout from '../../layout-elements/Layout/Layout';
import Input from '../../ui-elements/form/Input/Input';
import Textarea from '../../ui-elements/form/Textarea/Textarea';
import { ContactForm, ContactFormValue } from './models/ContactPage.model';
import { useTranslation } from 'react-i18next';
import styles from './ContactPage.module.scss';
import SEO from '../../SEO/SEO';

const ContactPage: React.FC = () => {
	const { t } = useTranslation();

	const initialContactFormValues: ContactForm = {
		email: { value: '', error: '' },
		name: { value: '', error: '' },
		message: { value: '', error: '' }
	};

	const [contactFormValues, setContactFormValues] = useState<ContactForm>(initialContactFormValues);

	const sendMessage = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		fetch('./php/mail.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams(
				Object.fromEntries(Object.entries(contactFormValues).map(([key, valueObj]) => [key, valueObj.value]))
			).toString()
		})
			.then((response) => {
				if (response.status === 200) {
					//open modal
				} else {
					//open modal with error
				}
			})
			.catch((error) => {
				//open modal with error
			});
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
		<>
			<SEO title={t('ContactPage.seo.title')} description={t('ContactPage.seo.description')} keywords={t('ContactPage.seo.keywords')} />
			<Layout
				content={
					<div className={styles['wrapper-s']}>
						<h1>{t('ContactPage.heading')}</h1>
						<form onSubmit={sendMessage} className={styles['contact-form']}>
							<span className={styles['contact-form__info']}>{t('ContactPage.form.info')}</span>
							<Input
								id="name"
								name="name"
								label={t('ContactPage.form.nameInput.label')}
								placeholder={t('ContactPage.form.nameInput.placeholder')}
								value={contactFormValues.name.value}
								error={contactFormValues.name.error}
								required={true}
								onValueChange={(value: string) => onInputValueChange(value, 'name')}
							/>
							<Input
								id="email"
								name="email"
								value={contactFormValues.email.value}
								label={t('ContactPage.form.emailInput.label')}
								placeholder={t('ContactPage.form.emailInput.placeholder')}
								error={contactFormValues.email.error}
								required={true}
								onValueChange={(value: string) => onInputValueChange(value, 'email')}
							/>
							<Textarea
								id="message"
								name="message"
								label={t('ContactPage.form.textarea.label')}
								placeholder={t('ContactPage.form.textarea.placeholder')}
								value={contactFormValues.message.value}
								error={contactFormValues.message.error}
								required={true}
								onValueChange={(value: string) => onInputValueChange(value, 'message')}
							/>
							<div className={styles['contact-form__buttons']}>
								<Button type="reset" apperance="text" cta={t('ContactPage.form.resetButton')} onClick={resetForm} />
								<Button type="submit" cta={t('ContactPage.form.submitButton')} disabled={isButtonDisabled()} />
							</div>
						</form>
					</div>
				}
			/>
		</>
	);
};

export default ContactPage;
