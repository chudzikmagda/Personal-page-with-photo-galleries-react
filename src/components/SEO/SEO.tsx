import React from 'react';
import { Helmet } from 'react-helmet';
import { SEOProps } from './models/SEOModels';

const SEO: React.FC<SEOProps> = ({ description, keywords, type, title }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:type" content={type} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta name="twitter:creator" content="Magda Chudzik" />
			<meta name="twitter:card" content={type} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
		</Helmet>
	);
};

SEO.defaultProps = {
	type: 'article'
};

export default SEO;
