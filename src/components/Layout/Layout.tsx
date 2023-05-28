import React, { ReactElement } from 'react';
import Header from '../ui-elements/Header/Header';
import styles from './Layout.module.scss';
import Footer from '../ui-elements/Footer/Footer';
import Content from '../Content/Content';
import { LayoutProps } from './models/LayoutModels';

const Layout = ({ ContentComponent }: LayoutProps): ReactElement => {
	return (
		<>
			<div className={styles.wrapper}>
				<Header />
				<Content ContentComponent={ContentComponent} />
				<Footer />
			</div>
		</>
	);
};

export default Layout;
