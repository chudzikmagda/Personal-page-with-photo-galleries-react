export type InputProps = {
	error?: string;
	id: string;
	label: string;
	placeholder: string;
	required?: boolean;
	value: string;
	onValueChange: (value: string) => void;
};
