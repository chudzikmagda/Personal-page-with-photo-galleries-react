import { useLayoutEffect, useState } from 'react';

import { Themes } from '../../contexts/types/theme.types';

const THEME_STORAGE_KEY = 'theme';

const readThemeFromStorage = (): Themes | null => {
	const storedTheme: string | null = localStorage.getItem(THEME_STORAGE_KEY);

	return storedTheme === Themes.DARK || storedTheme === Themes.LIGHT ? storedTheme : null;
};

const applyThemeClass = (theme: Themes): void => {
	const body: HTMLBodyElement | null = document.querySelector('body');

	if (!body) return;

	body.classList.remove(Themes.DARK, Themes.LIGHT);
	body.classList.add(theme);
};

export const useTheme = (): [Themes, React.Dispatch<React.SetStateAction<Themes>>] => {
	const [theme, setTheme] = useState<Themes>(() => readThemeFromStorage() || Themes.LIGHT);

	useLayoutEffect(() => {
		applyThemeClass(theme);
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [theme]);

	return [theme, setTheme];
};
