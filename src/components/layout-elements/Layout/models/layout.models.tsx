import { ReactNode } from 'react';
import { ContentType } from '../../Content/models/content.models';

export type LayoutProps = {
	content: ReactNode;
	contentType: ContentType;
};
