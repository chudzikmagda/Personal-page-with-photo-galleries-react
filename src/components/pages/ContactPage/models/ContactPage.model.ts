export type ContactFormValue = {
	value: string;
	error: string;
};

export type ContactForm = {
	email: ContactFormValue;
	name: ContactFormValue;
	message: ContactFormValue;
};
