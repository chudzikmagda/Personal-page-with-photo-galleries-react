import React from 'react';

export type LanguageContextType = { state: string; onChange: (lang: string) => void };

const LanguageContext: React.Context<LanguageContextType> = React.createContext({
	state: 'pl',
	// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
	onChange: (lang: string): void => {}
});

export default LanguageContext;
