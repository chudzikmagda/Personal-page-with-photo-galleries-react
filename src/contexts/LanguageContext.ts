import React from 'react';
import { LanguageContextType, Languages } from './models/Languages.model';

const InitialLanguageContext: LanguageContextType = {
	state: Languages.PL,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	onChange: (lang: Languages): void => {}
};

const LanguageContext: React.Context<LanguageContextType> = React.createContext(InitialLanguageContext);

export default LanguageContext;
