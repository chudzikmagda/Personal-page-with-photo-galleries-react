import type React from 'react';

import LanguageToggle from './components/language-toggle/LanguageToggle';
import ThemeToggle from './components/theme-toggle/ThemeToggle';
import styles from './icon-menu.module.scss';

const IconMenu: React.FC = () => {
  return (
    <div className={styles['icon-menu']}>
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
};

export default IconMenu;
