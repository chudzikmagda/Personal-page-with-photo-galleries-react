import React from 'react';

import Layout from '../Layout/Layout';
import SEO from '../../SEO/SEO';
import { PageShellProps } from './pageShel.types';

const PageShell: React.FC<PageShellProps> = ({ title, description, keywords, content, contentType }) => {
	return (
		<>
			<SEO title={title} description={description} keywords={keywords} />
			<Layout content={content} contentType={contentType} />
		</>
	);
};

export default PageShell;
