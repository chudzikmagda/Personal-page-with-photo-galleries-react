import React from 'react';

import { ThemeContextType, Themes } from './types/theme.types';

const InitialThemeContext: ThemeContextType = {
	state: Themes.LIGHT,
	onChange: (theme: Themes): void => void theme
};

const ThemeContext: React.Context<ThemeContextType> = React.createContext(InitialThemeContext);

export default ThemeContext;
