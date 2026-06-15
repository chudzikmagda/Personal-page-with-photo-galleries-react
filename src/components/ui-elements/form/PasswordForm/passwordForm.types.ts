import type { SubmitEventHandler } from 'react';

interface PasswordTranslations {
	descriptionKey: string;
	labelKey: string;
	submitCtaKey: string;
	titleKey: string;
}

export interface PasswordFormProps {
	error: string;
	password: string;
	translations: PasswordTranslations;
	onPasswordChange: (value: string) => void;
	onSubmit: SubmitEventHandler<HTMLFormElement>;
}
