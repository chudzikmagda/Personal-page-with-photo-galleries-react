export type TextareaProps = {
	error?: string;
	id: string;
	label: string;
	name: string;
	placeholder: string;
	required?: boolean;
	value: string;
	onValueChange: (value: string) => void;
};
