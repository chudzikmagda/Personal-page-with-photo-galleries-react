import React from 'react';

import Logotype from '../../ui-elements/Logotype/Logotype';
import Menu from '../../ui-elements/Menu/Menu';
import IconMenu from './components/IconMenu/IconMenu';
import styles from './header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<Logotype />
			</div>
			<div className={styles.header__menu}>
				<Menu />
			</div>
			<div className={styles['header__icon-menu']}>
				<IconMenu />
			</div>
		</header>
	);
};

export default Header;
