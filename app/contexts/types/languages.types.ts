export enum Languages {
	EN = 'en',
	PL = 'pl'
}

export interface LanguageContextType {
	state: Languages;
	onChange: (lang: Languages) => void;
}
