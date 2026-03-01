import React from 'react';
import Content from '../Content/Content';
import { ContentType } from '../Content/models/content.models';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.scss';
import { LayoutProps } from './models/layout.models';

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
