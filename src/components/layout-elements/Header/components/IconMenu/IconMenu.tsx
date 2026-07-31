import React from 'react';

import LanguageToggle from '../LanguageToggle/LanguageToggle';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
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
