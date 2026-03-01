import React from 'react';
import styles from './Content.module.scss';
import { ContentProps, ContentType } from './models/content.models';

const Content: React.FC<ContentProps> = ({ content, contentType }) => {
	return (
		<div className={styles.content} style={contentType === ContentType.FULLWIDTH ? { padding: 0 } : {}}>
			{content}
		</div>
	);
};

export default Content;
