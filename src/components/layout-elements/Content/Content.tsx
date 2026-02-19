import React from 'react';
import { ContentProps } from './models/content.models';
import styles from './Content.module.scss';

const Content: React.FC<ContentProps> = ({ content }) => {
	return <div className={styles.content}>{content}</div>;
};

export default Content;
