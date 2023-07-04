import React from 'react';
import { ContentProps } from './models/ContentModels';
import styles from './Content.module.scss';

const Content: React.FC<ContentProps> = (props) => {
	return <div className={styles.content}>{props.content}</div>;
};

export default Content;
