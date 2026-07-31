import { createBrowserRouter } from 'react-router-dom';

import { ProjectPaths } from '../shared/types/projects.types';
import lazyRouteElement from '../shared/utils/lazyLoadRouteUtils';
import { Paths } from './types/routing.types';

const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: Paths.ABOUT,
		element: lazyRouteElement(() => import('../components/pages/AboutMePage/AboutMePage'))
	},
	{
		path: Paths.CITY,
		element: lazyRouteElement(() => import('../components/pages/CityPage/CityPage'))
	},
	{
		path: Paths.CONTACT,
		element: lazyRouteElement(() => import('../components/pages/ContactPage/ContactPage'))
	},
	{
		path: Paths.LANDSCAPE,
		element: lazyRouteElement(() => import('../components/pages/LandscapePage/LandscapePage'))
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`,
		element: lazyRouteElement(() => import('../components/pages/BwLandscapePage/BwLandscapePage'))
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`,
		element: lazyRouteElement(() => import('../components/pages/ColorLandscapePage/ColorLandscapePage'))
	},
	{
		path: `${Paths.PROJECTS}`,
		element: lazyRouteElement(() => import('../components/pages/projects/ProjectsPage/ProjectsPage'))
	},
	{
		path: `${Paths.PROJECTS}/${ProjectPaths.WOMENS_ICE_HOCKEY_CRACOVIA}`,
		element: lazyRouteElement(() => import('../components/pages/projects/WomensIceHockeyCracovia/WomensIceHockeyCracoviaPage'))
	},
	{
		path: Paths.PRINTS,
		element: lazyRouteElement(() => import('../components/pages/PrintsPage/PrintsPage'))
	},
	{
		path: '/',
		element: lazyRouteElement(() => import('../components/pages/HomePage/HomePage'))
	},
	{
		path: '*',
		element: lazyRouteElement(() => import('../components/pages/PageNotFound/PageNotFound'))
	}
]);

export default Router;
