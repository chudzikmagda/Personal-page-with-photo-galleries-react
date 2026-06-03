import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { hotjar } from 'react-hotjar';
import { RouterProvider } from 'react-router-dom';

import LanguageContext from './contexts/LanguageContext';
import ThemeContext from './contexts/ThemeContext';
import { useLanguage } from './hooks/useLanguage/useLanguage';
import { useTheme } from './hooks/useTheme/useTheme';
import Router from './routing/Routing';

const App: React.FC = () => {
	const [language, setLanguage] = useLanguage();
	const [theme, setTheme] = useTheme();

	useEffect(() => {
		const TRACKING_ID = 'G-11Z8MHVWS1';
		ReactGA.initialize(TRACKING_ID);
		hotjar.initialize({ id: 1141369, sv: 6 });
	}, []);

	return (
		<LanguageContext.Provider value={{ state: language, onChange: setLanguage }}>
			<ThemeContext.Provider value={{ state: theme, onChange: setTheme }}>
				<RouterProvider router={Router} />
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	);
};

export default App;
