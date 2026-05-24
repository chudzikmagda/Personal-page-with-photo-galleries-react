export enum Themes {
	DARK = 'dark',
	LIGHT = 'light'
}

export interface ThemeContextType {
	state: Themes;
	onChange: (theme: Themes) => void;
}
