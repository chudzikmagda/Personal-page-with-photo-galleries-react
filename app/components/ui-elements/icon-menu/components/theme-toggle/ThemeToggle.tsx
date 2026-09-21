import type React from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import MoonIcon from '~/components/ui-elements/icon-menu/components/svg-icons/MoonIcon';
import SunIcon from '~/components/ui-elements/icon-menu/components/svg-icons/SunIcon';
import Tooltip from '~/components/ui-elements/tooltip/Tooltip';
import ThemeContext from '~/contexts/ThemeContext';
import { Themes } from '~/contexts/types/theme.types';

import styles from './theme-toggle.module.scss';

const ThemeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  const toggleTheme = (): void => {
    const newTheme = themeContext.state === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    themeContext.onChange(newTheme);
  };

  return (
    <Tooltip text={t('Menu.changeMode')}>
      <button
        type="button"
        aria-label={t('Menu.changeMode')}
        className={`${styles.control}`}
        onClick={toggleTheme}
      >
        {themeContext.state === Themes.DARK ? <MoonIcon /> : <SunIcon />}
      </button>
    </Tooltip>
  );
};

export default ThemeToggle;
