export enum InputType {
	TEXT = 'text',
	PASSWORD = 'password',
	EMAIL = 'email',
	TEL = 'tel'
}

export interface InputProps {
	id: string;
	label: string;
	name: string;
	value: string;
	onValueChange: (value: string) => void;
	autoComplete?: string;
	error?: string;
	placeholder?: string;
	required?: boolean;
	type?: InputType;
}
