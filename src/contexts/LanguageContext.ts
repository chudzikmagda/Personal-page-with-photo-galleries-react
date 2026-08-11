import React from 'react';

import { LanguageContextType, Languages } from './types/languages.types';

const InitialLanguageContext: LanguageContextType = {
	state: Languages.PL,
	onChange: (lang: Languages): void => {
		void lang;
	}
};

const LanguageContext: React.Context<LanguageContextType> = React.createContext(InitialLanguageContext);

export default LanguageContext;
