import React from 'react';

const LanguageContext = React.createContext({
	language: 'en',
	// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
	onLanguageChange: (lang: string): void => {}
});

export default LanguageContext;
