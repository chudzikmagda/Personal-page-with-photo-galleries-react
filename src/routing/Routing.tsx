import { createBrowserRouter } from 'react-router-dom';

import useLazyLoadRoute from '../hooks/useLazyLoadRoute/useLazyLoadRoute';
import { Paths } from './types/routing.types';

const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: Paths.ABOUT,
		element: useLazyLoadRoute('AboutMePage')
	},
	{
		path: Paths.CITY,
		element: useLazyLoadRoute('CityPage')
	},
	{
		path: Paths.CONTACT,
		element: useLazyLoadRoute('ContactPage')
	},
	{
		path: Paths.LANDSCAPE,
		element: useLazyLoadRoute('LandscapePage')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`,
		element: useLazyLoadRoute('BwLandscapePage')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`,
		element: useLazyLoadRoute('ColorLandscapePage')
	},
	{
		path: Paths.PRINTS,
		element: useLazyLoadRoute('PrintsPage')
	},
	{
		path: '/',
		element: useLazyLoadRoute('HomePage')
	},
	{
		path: '*',
		element: useLazyLoadRoute('PageNotFound')
	}
]);

export default Router;
