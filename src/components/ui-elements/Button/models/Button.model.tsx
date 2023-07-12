export type ButtonProps = {
	apperance?: 'primary-solid' | 'secondary-solid' | 'primary-outline' | 'secondary-outline' | 'text';
	disabled?: boolean;
	cta: string;
	type?: 'button' | 'reset' | 'submit';
	onClick?: () => void;
};
