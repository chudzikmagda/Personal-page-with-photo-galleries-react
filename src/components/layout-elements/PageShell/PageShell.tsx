import React from 'react';

import SEO from '../../SEO/SEO';
import Layout from '../Layout/Layout';
import { PageShellProps } from './pageShell.types';

const PageShell: React.FC<PageShellProps> = ({ title, description, keywords, content, contentType }) => {
	return (
		<>
			<SEO title={title} description={description} keywords={keywords} />
			<Layout content={content} contentType={contentType} />
		</>
	);
};

export default PageShell;
