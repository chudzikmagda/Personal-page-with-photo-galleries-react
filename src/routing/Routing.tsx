import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Spinner from '../components/ui-elements/Spinner/Spinner';
import { ProjectPaths } from '../shared/types/projects.types';
import lazyLoadRoute from '../shared/utils/lazyLoadRouteUtils';
import { Paths } from './types/routing.types';

const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: Paths.ABOUT,
		element: lazyLoadRoute('AboutMePage')
	},
	{
		path: Paths.CITY,
		element: lazyLoadRoute('CityPage')
	},
	{
		path: Paths.CONTACT,
		element: lazyLoadRoute('ContactPage')
	},
	{
		path: Paths.LANDSCAPE,
		element: lazyLoadRoute('LandscapePage')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`,
		element: lazyLoadRoute('BwLandscapePage')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`,
		element: lazyLoadRoute('ColorLandscapePage')
	},
	{
		path: `${Paths.PROJECTS}`,
		element: (
			<Suspense fallback={<Spinner />}>
				{React.createElement(lazy(() => import('../components/pages/projects/ProjectsPage/ProjectsPage')))}
			</Suspense>
		)
	},
	{
		path: `${Paths.PROJECTS}/${ProjectPaths.WOMENS_ICE_HOCKEY_CRACOVIA}`,
		element: (
			<Suspense fallback={<Spinner />}>
				{React.createElement(lazy(() => import('./../components/pages/projects/WomensIceHockeyCracovia/WomensIceHockeyCracoviaPage')))}
			</Suspense>
		)
	},
	{
		path: Paths.PRINTS,
		element: lazyLoadRoute('PrintsPage')
	},
	{
		path: '/',
		element: lazyLoadRoute('HomePage')
	},
	{
		path: '*',
		element: lazyLoadRoute('PageNotFound')
	}
]);

export default Router;
