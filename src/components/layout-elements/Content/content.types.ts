import { ReactNode } from 'react';

export enum ContentType {
	FULLWIDTH = 'fullwidth',
	GRID = 'grid'
}

export interface ContentProps {
	content: ReactNode;
	contentType: ContentType;
}
