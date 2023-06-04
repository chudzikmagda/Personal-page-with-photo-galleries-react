import React, { ReactElement } from 'react';
import Header from '../ui-elements/Header/Header';
import styles from './Layout.module.scss';
import Footer from '../ui-elements/Footer/Footer';
import Content from '../Content/Content';
import { LayoutProps } from './models/LayoutModels';

const Layout = (props: LayoutProps): ReactElement => {
	return (
		<div className={styles.layout}>
			<Header />
			<Content content={props.content} />
			<Footer />
		</div>
	);
};

export default Layout;
