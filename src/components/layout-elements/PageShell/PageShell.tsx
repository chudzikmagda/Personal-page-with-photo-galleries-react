import React from 'react';

import SEO from '../../SEO/SEO';
import Layout from '../Layout/Layout';
import { PageShellProps } from './pageShell.types';

const PageShell: React.FC<PageShellProps> = ({ title, description, image, keywords, content, contentType, url }) => {
	return (
		<>
			<SEO title={title} description={description} keywords={keywords} image={image} url={url} />
			<Layout content={content} contentType={contentType} />
		</>
	);
};

export default PageShell;
