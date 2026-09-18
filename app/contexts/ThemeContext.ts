import { createContext } from 'react';
import type { ThemeContextType } from '~/contexts/types/theme.types';
import { Themes } from '~/contexts/types/theme.types';

const InitialThemeContext: ThemeContextType = {
  state: Themes.LIGHT,
  onChange: (theme: Themes): void => {
    void theme;
  },
};

const ThemeContext: React.Context<ThemeContextType> = createContext(InitialThemeContext);

export default ThemeContext;
