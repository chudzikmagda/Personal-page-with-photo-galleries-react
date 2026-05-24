import React from 'react';

import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';
import { LayoutProps } from './layout.types';

const Layout: React.FC<LayoutProps> = ({ content, contentType }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<Content content={content} contentType={contentType} />
			<Footer />
		</div>
	);
};

export default Layout;
