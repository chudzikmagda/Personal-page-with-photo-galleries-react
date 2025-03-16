/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import LanguageContext from './contexts/LanguageContext';
import ThemeContext from './contexts/ThemeContext';
import { Languages } from './contexts/models/Languages.model';
import { Themes } from './contexts/models/Theme.model';
import i18n from './i18n';
import Router from './routing/Routing';

const App: React.FC = () => {
	const [language, setLanguage] = useState<string>(i18n.language);
	const [theme, setTheme] = useState<Themes>(Themes.LIGHT);

	const handleLanguageChange = (lang: Languages): void => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	const handleThemeChange = (theme: Themes): void => {
		setTheme(theme);
	};

	const addClass = (className: string, element: HTMLElement): void => {
		element.classList.add(className);
	};

	const removeClass = (className: string, element: HTMLElement): void => {
		element.classList.remove(className);
	};

	const setClassBasedOnTheme = (theme: Themes): void => {
		const body: HTMLBodyElement | null = document.querySelector('body');
		switch (theme) {
			case Themes.DARK:
				if (!body) return;
				removeClass(Themes.LIGHT, body);
				addClass(Themes.DARK, body);
				break;
			default:
				if (!body) return;
				removeClass(Themes.DARK, body);
				addClass(Themes.LIGHT, body);
				break;
		}
	};

	const retrieveThemeFromStorage = (): Themes | null => {
		return localStorage.getItem('theme') as Themes;
	};

	const loadTheme = (): void => {
		const currentTheme: Themes = retrieveThemeFromStorage() || theme;

		setClassBasedOnTheme(currentTheme);
		handleThemeChange(currentTheme);
	};

	useEffect(() => {
		loadTheme();
	}, [theme]);

	return (
		<HelmetProvider>
			<LanguageContext.Provider value={{ state: language as Languages, onChange: handleLanguageChange }}>
				<ThemeContext.Provider value={{ state: theme, onChange: handleThemeChange }}>
					<RouterProvider router={Router} />
				</ThemeContext.Provider>
			</LanguageContext.Provider>
		</HelmetProvider>
	);
};

export default App;
