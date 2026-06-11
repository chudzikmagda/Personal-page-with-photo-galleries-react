import { ReactNode } from 'react';

export enum Paths {
	ABOUT = 'about',
	CITY = 'city',
	LANDSCAPE = 'landscape',
	BW_LANDSCAPE = 'black-and-white-landscape',
	COLOR_LANDSCAPE = 'color-landscape',
	PROJECTS = 'projects',
	PRINTS = 'prints',
	CONTACT = 'contact'
}

export enum ProjectPaths {
	WOMENS_ICE_HOCKEY_CRACOVIA = 'womens-ice-hockey-cracovia'
}

export type PasswordProtectedRouteProps = {
	children: ReactNode;
};

export type ViteImportMeta = ImportMeta & {
	env: {
		VITE_WOMENS_ICE_HOCKEY_CRACOVIA_PASSWORD?: string;
	};
};
