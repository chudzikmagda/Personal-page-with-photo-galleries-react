import React from 'react';

type LanguageContextType = { language: string; onLanguageChange: (lang: string) => void };

const LanguageContext: React.Context<LanguageContextType> = React.createContext({
	language: 'en',
	// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
	onLanguageChange: (lang: string): void => {}
});

export default LanguageContext;
