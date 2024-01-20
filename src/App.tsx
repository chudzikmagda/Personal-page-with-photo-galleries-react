import React, { useState } from 'react';
import LanguageContext from './contexts/LanguageContext';
import { RouterProvider } from 'react-router-dom';
import Router from './routing/Routing';
import { HelmetProvider } from 'react-helmet-async';
import i18n from './i18n';

const App: React.FC = () => {
	const [language, setLanguage] = useState<string>(i18n.language);

	const handleLanguageChange = (lang: string): void => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return (
		<HelmetProvider>
			<LanguageContext.Provider value={{ state: language, onChange: handleLanguageChange }}>
				<RouterProvider router={Router} />
			</LanguageContext.Provider>
		</HelmetProvider>
	);
};

export default App;
