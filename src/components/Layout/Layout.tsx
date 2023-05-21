import React from 'react';
import Header from '../ui-elements/Header/Header';
import styles from './Layout.module.scss';

const Layout = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header />
		</div>
	);
};

export default Layout;
