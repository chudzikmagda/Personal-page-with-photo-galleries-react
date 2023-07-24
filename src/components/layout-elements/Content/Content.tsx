import React from 'react';
import { ContentProps } from './models/ContentModels';
import styles from './Content.module.scss';

const Content: React.FC<ContentProps> = ({ content }) => {
	return <div className={styles.content}>{content}</div>;
};

export default Content;
