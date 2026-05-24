import { ReactNode } from 'react';

import { ContentType } from '../Content/content.types';

export type LayoutProps = {
	content: ReactNode;
	contentType: ContentType;
};
