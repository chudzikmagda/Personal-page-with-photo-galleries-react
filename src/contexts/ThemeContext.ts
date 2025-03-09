import React from 'react';
import { ThemeContextType, Themes } from './models/Theme.model';

const InitialThemeContext: ThemeContextType = {
	state: Themes.LIGHT,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	onChange: (theme: Themes): void => {}
};

const ThemeContext: React.Context<ThemeContextType> = React.createContext(InitialThemeContext);

export default ThemeContext;
