import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import LanguageContext from './contexts/LanguageContext';
import { Languages } from './contexts/models/languages.model';
import i18n from './i18n';
import Router from './routing/Routing';

const App: React.FC = () => {
	const [language, setLanguage] = useState<string>(i18n.language);

	const handleLanguageChange = (lang: Languages): void => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return (
		<HelmetProvider>
			<LanguageContext.Provider value={{ state: language as Languages, onChange: handleLanguageChange }}>
				<RouterProvider router={Router} />
			</LanguageContext.Provider>
		</HelmetProvider>
	);
};

export default App;
