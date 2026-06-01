import React from 'react';

import KebabMenu from '../../ui-elements/KebabMenu/KebabMenu';
import Logotype from '../../ui-elements/Logotype/Logotype';
import Menu from '../../ui-elements/Menu/Menu';
import styles from './Header.module.scss';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<Logotype />
			</div>
			<div className={styles.header__menu}>
				<Menu />
			</div>
			<div className={styles.header__kebab}>
				<KebabMenu />
			</div>
		</header>
	);
};

export default Header;
