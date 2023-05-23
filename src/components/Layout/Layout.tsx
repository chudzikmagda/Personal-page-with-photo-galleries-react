import React from 'react';
import Header from '../ui-elements/Header/Header';
import styles from './Layout.module.scss';
import Footer from '../ui-elements/Footer/Footer';

const Layout = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Footer />
		</div>
	);
};

export default Layout;
