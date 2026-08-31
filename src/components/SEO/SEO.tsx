import React from 'react';
import { Helmet } from 'react-helmet-async';

import { SEOProps } from './seo.types';

const SEO: React.FC<SEOProps> = ({ description, image, keywords, siteName, title, type }) => {
	const siteUrl = 'https://magdachudzik.pl';
	const currentUrl = window.location.href;
	const imageUrl = new URL(image, siteUrl).href;

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={currentUrl} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:site_name" content={siteName} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={imageUrl} />
		</Helmet>
	);
};

export default SEO;
