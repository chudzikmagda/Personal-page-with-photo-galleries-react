import React from 'react';
import styles from './Header.module.scss';
import Logotype from '../../ui-elements/Logotype/Logotype';
import Menu from '../../ui-elements/Menu/Menu';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Logotype />
			<Menu />
		</header>
	);
};

export default Header;
