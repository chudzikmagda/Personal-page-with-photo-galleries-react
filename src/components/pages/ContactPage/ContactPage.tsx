/* eslint-disable indent */
import React, { useRef, useState } from 'react';
import Button from '../../ui-elements/Button/Button';
import { ButtonApperance, ButtonType } from '../../ui-elements/Button/models/button.models';
import Layout from '../../layout-elements/Layout/Layout';
import Input from '../../ui-elements/form/Input/Input';
import Textarea from '../../ui-elements/form/Textarea/Textarea';
import { ContactForm, ContactFormFieldNames, ContactFormValidators, ContactFormValue } from './models/contactPage.models';
import Alert from '../../ui-elements/Alert/Alert';
import { AlertType } from '../../ui-elements/Alert/models/alert.models';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import styles from './ContactPage.module.scss';
import SEO from '../../SEO/SEO';

const ContactPage: React.FC = () => {
	const { t } = useTranslation();
	const alertRef = useRef<HTMLDivElement | null>(null);

	const initialContactFormValues: ContactForm = {
		email: { value: '', error: '', validators: [ContactFormValidators.REQUIRED, ContactFormValidators.EMAIL] },
		name: { value: '', error: '', validators: [ContactFormValidators.REQUIRED, ContactFormValidators.MIN_LENGTH] },
		message: { value: '', error: '', validators: [ContactFormValidators.REQUIRED, ContactFormValidators.MIN_LENGTH] }
	};
	const [contactFormValues, setContactFormValues] = useState<ContactForm>(initialContactFormValues);

	const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
	const [alertType, setAlertType] = useState<AlertType>(AlertType.SUCCESS);
	const [alertContent, setAlertContent] = useState<string>('');
	const [alertHeader, setAlertHeader] = useState<string>('');

	const showAlert = (alertType: AlertType, alertContent: string, alertHeader: string): void => {
		setAlertType(alertType);
		setAlertHeader(alertHeader);
		setAlertContent(alertContent);
		setIsAlertVisible(true);
	};

	const resetForm = (): void => {
		setContactFormValues(initialContactFormValues);
	};

	const isButtonDisabled = (): boolean => {
		return !Object.values(contactFormValues).every((contactFormValue: ContactFormValue) => {
			return contactFormValue.value && !contactFormValue.error;
		});
	};

	const onInputValueChange = (fieldValue: string, fieldName: ContactFormFieldNames): void => {
		setContactFormValues({
			...contactFormValues,
			[fieldName]: {
				value: fieldValue,
				error: setErrorMessage(fieldValue, contactFormValues[fieldName].validators),
				validators: contactFormValues[fieldName].validators
			}
		});
	};

	const emailValidator = (value: string): boolean => {
		const emailRegexMatcher = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
		return value.match(emailRegexMatcher) ? false : true;
	};

	const validateValue = (value: string, validator: ContactFormValidators): string => {
		switch (validator) {
			case ContactFormValidators.EMAIL:
				return emailValidator(value) ? `${t('ContactPage.form.error.email')} ` : '';
			case ContactFormValidators.MIN_LENGTH:
				return value.length < 2 ? `${t('ContactPage.form.error.minLength')} ` : '';
			case ContactFormValidators.REQUIRED:
				return !value ? `${t('ContactPage.form.error.required')} ` : '';
		}
	};

	const setErrorMessage = (value: string, validators: ContactFormValidators[] | undefined): string => {
		let errorMsg = '';

		validators?.map((validator: ContactFormValidators) => {
			errorMsg += validateValue(value, validator);
		});

		return errorMsg;
	};

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
					showAlert(AlertType.SUCCESS, t('ContactPage.alert.success.content'), t('ContactPage.alert.success.header'));
					resetForm();
				} else {
					showAlert(AlertType.ERROR, t('ContactPage.alert.error.content'), t('ContactPage.alert.error.header'));
				}
			})
			.catch(() => {
				showAlert(AlertType.ERROR, t('ContactPage.alert.error.content'), t('ContactPage.alert.error.header'));
			});
	};

	return (
		<>
			<SEO title={t('ContactPage.seo.title')} description={t('ContactPage.seo.description')} keywords={t('ContactPage.seo.keywords')} />

			<Layout
				content={
					<div className={styles['wrapper-s']}>
						<h1>{t('ContactPage.heading')}</h1>
						<form method="POST" onSubmit={sendMessage} className={styles['contact-form']}>
							<span className={styles['contact-form__info']}>{t('ContactPage.form.info')}</span>
							<Input
								id="name"
								name="name"
								label={t('ContactPage.form.nameInput.label')}
								placeholder={t('ContactPage.form.nameInput.placeholder')}
								value={contactFormValues.name.value}
								error={contactFormValues.name.error}
								required={true}
								onValueChange={(value: string) => onInputValueChange(value, ContactFormFieldNames.NAME)}
							/>
							<Input
								id="email"
								name="email"
								value={contactFormValues.email.value}
								label={t('ContactPage.form.emailInput.label')}
								placeholder={t('ContactPage.form.emailInput.placeholder')}
								error={contactFormValues.email.error}
								required={true}
								onValueChange={(value: string) => onInputValueChange(value, ContactFormFieldNames.EMAIL)}
							/>
							<Textarea
								id="message"
								name="message"
								label={t('ContactPage.form.textarea.label')}
								placeholder={t('ContactPage.form.textarea.placeholder')}
								value={contactFormValues.message.value}
								error={contactFormValues.message.error}
								required={true}
								onValueChange={(value: string) => onInputValueChange(value, ContactFormFieldNames.MESSAGE)}
							/>
							<div className={styles['contact-form__buttons']}>
								<Button
									type={ButtonType.RESET}
									apperance={ButtonApperance.TEXT}
									cta={t('ContactPage.form.resetButton')}
									onClick={resetForm}
								/>
								<Button type={ButtonType.SUBMIT} cta={t('ContactPage.form.submitButton')} disabled={isButtonDisabled()} />
							</div>
						</form>
					</div>
				}
			/>
			<CSSTransition
				in={isAlertVisible}
				timeout={600}
				classNames={{
					enter: styles['contact-form__enter'],
					enterActive: styles['contact-form__enter--active'],
					exit: styles['contact-form__exit'],
					exitActive: styles['contact-form__exit--active']
				}}
				nodeRef={alertRef}
				unmountOnExit>
				<div ref={alertRef}>
					<Alert type={alertType} content={alertContent} header={alertHeader} closeAlert={() => setIsAlertVisible(false)} />
				</div>
			</CSSTransition>
		</>
	);
};

export default ContactPage;
