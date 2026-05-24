export type ButtonProps = {
	apperance?:
		| ButtonApperance.PRIMARY_SOLID
		| ButtonApperance.PRIMARY_OUTLINE
		| ButtonApperance.SECONDARY_SOLID
		| ButtonApperance.SECONDARY_OUTLINE
		| ButtonApperance.TEXT;
	disabled?: boolean;
	cta: string;
	type?: ButtonType.BUTTON | ButtonType.RESET | ButtonType.SUBMIT;
	onClick?: () => void;
};

export enum ButtonType {
	BUTTON = 'button',
	RESET = 'reset',
	SUBMIT = 'submit'
}

export enum ButtonApperance {
	PRIMARY_SOLID = 'primary-solid',
	PRIMARY_OUTLINE = 'primary-outline',
	SECONDARY_SOLID = 'secondary-solid',
	SECONDARY_OUTLINE = 'secondary-outline',
	TEXT = 'text'
}
