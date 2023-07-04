import React from 'react';
import styles from './Header.module.scss';
import Logotype from '../Logotype/Logotype';
import Menu from '../Menu/Menu';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Logotype />
			<Menu />
		</header>
	);
};

export default Header;
