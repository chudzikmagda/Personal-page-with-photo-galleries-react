import React, { ReactElement } from 'react';
import { ContentProps } from './models/ContentModels';
import styles from './Content.module.scss';

const Content = (props: ContentProps): ReactElement => {
	return <div className={styles.content}>{props.content}</div>;
};

export default Content;
