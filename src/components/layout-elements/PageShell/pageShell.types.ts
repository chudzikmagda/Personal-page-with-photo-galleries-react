import React from 'react';

import { ContentType } from '../Content/content.types';

export type PageShellProps = {
	content: React.ReactNode;
	contentType: ContentType;
	description: string;
	image: string;
	keywords: string;
	title: string;
	url: string;
};
