import { Paths } from '../../../routing/types/routing.types';

export type MenuDataItem = { menuTitleKey: string; path: string };

export const menuItems: MenuDataItem[] = [
	{ menuTitleKey: 'Menu.about', path: Paths.ABOUT },
	{ menuTitleKey: 'Menu.city', path: Paths.CITY },
	{ menuTitleKey: 'Menu.landscape', path: Paths.LANDSCAPE },
	{ menuTitleKey: 'Menu.projects', path: Paths.PROJECTS },
	{ menuTitleKey: 'Menu.prints', path: Paths.PRINTS },
	{ menuTitleKey: 'Menu.contact', path: Paths.CONTACT }
];
