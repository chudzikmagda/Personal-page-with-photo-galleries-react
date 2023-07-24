import React, { useState } from 'react';
import './App.scss';
import LanguageContext from './contexts/LanguageContext';
import { RouterProvider } from 'react-router-dom';
import Router from './routing/Routing';
import i18n from './i18n';

const App: React.FC = () => {
	const [language, setLanguage] = useState<string>(i18n.language);

	const handleLanguageChange = (lang: string): void => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return (
		<LanguageContext.Provider value={{ state: language, onChange: handleLanguageChange }}>
			<RouterProvider router={Router} />
		</LanguageContext.Provider>
	);
};

export default App;
