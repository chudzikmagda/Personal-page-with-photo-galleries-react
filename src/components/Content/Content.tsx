import React, { ReactElement } from 'react';
import { ContentProps } from './models/ContentModels';
import styles from './Content.module.scss';

const Content = ({ ContentComponent }: ContentProps): ReactElement => {
	return <div className={styles.content}>{<ContentComponent />}</div>;
};

export default Content;
