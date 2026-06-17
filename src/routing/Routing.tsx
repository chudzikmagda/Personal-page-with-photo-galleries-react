import { createBrowserRouter } from 'react-router-dom';

import { ProjectPaths } from '../shared/types/projects.types';
import lazyLoadRoute from '../shared/utils/lazyLoadRouteUtils';
import { Paths } from './types/routing.types';

const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: Paths.ABOUT,
		element: lazyLoadRoute('AboutMePage/AboutMePage') // Assumes folder/file structure matches
	},
	{
		path: Paths.CITY,
		element: lazyLoadRoute('CityPage/CityPage')
	},
	{
		path: Paths.CONTACT,
		element: lazyLoadRoute('ContactPage/ContactPage')
	},
	{
		path: Paths.LANDSCAPE,
		element: lazyLoadRoute('LandscapePage/LandscapePage')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`,
		element: lazyLoadRoute('BwLandscapePage/BwLandscapePage')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`,
		element: lazyLoadRoute('ColorLandscapePage/ColorLandscapePage')
	},
	{
		path: `${Paths.PROJECTS}`,
		element: lazyLoadRoute('projects/ProjectsPage/ProjectsPage')
	},
	{
		path: `${Paths.PROJECTS}/${ProjectPaths.WOMENS_ICE_HOCKEY_CRACOVIA}`,
		element: lazyLoadRoute('projects/WomensIceHockeyCracovia/WomensIceHockeyCracoviaPage')
	},
	{
		path: Paths.PRINTS,
		element: lazyLoadRoute('PrintsPage/PrintsPage')
	},
	{
		path: '/',
		element: lazyLoadRoute('HomePage/HomePage')
	},
	{
		path: '*',
		element: lazyLoadRoute('PageNotFound/PageNotFound')
	}
]);

export default Router;
