export type ContactFormValue = {
	value: string;
	error: string;
	validators?: ContactFormValidators[];
};

export type ContactForm = {
	email: ContactFormValue;
	name: ContactFormValue;
	message: ContactFormValue;
};

export enum ContactFormFieldNames {
	EMAIL = 'email',
	NAME = 'name',
	MESSAGE = 'message'
}

export enum ContactFormValidators {
	EMAIL = 'email',
	MIN_LENGTH = 'minLength',
	REQUIRED = 'required'
}
