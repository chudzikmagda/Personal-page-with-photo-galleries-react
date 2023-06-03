import React, { ReactElement, useState } from 'react';
import './App.scss';
import HomePage from './components/pages/HomePage/HomePage';
import LanguageContext from './contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

function App(): ReactElement {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	const handleLanguageChange = (lang: string): void => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return (
		<LanguageContext.Provider value={{ language, onLanguageChange: handleLanguageChange }}>
			<HomePage />;
		</LanguageContext.Provider>
	);
}

export default App;
