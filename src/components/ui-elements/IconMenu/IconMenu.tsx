import React from 'react';

import LanguageToggle from './components/LanguageToggle/LanguageToggle';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
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
