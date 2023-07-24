import React from 'react';
import styles from './Layout.module.scss';
import Content from '../Content/Content';
import { LayoutProps } from './models/LayoutModels';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC<LayoutProps> = ({ content }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<Content content={content} />
			<Footer />
		</div>
	);
};

export default Layout;
