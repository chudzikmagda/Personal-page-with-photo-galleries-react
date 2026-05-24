import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import LanguageContext from './contexts/LanguageContext';
import ThemeContext from './contexts/ThemeContext';
import { useLanguage } from './hooks/useLanguage/useLanguage';
import { useTheme } from './hooks/useTheme/useTheme';
import Router from './routing/Routing';

const App: React.FC = () => {
	const [language, setLanguage] = useLanguage();
	const [theme, setTheme] = useTheme();

	return (
		<LanguageContext.Provider value={{ state: language, onChange: setLanguage }}>
			<ThemeContext.Provider value={{ state: theme, onChange: setTheme }}>
				<RouterProvider router={Router} />
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
};

export default App;
