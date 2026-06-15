import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Spinner from '../components/ui-elements/Spinner/Spinner';
import useLazyLoadRoute from '../hooks/useLazyLoadRoute/useLazyLoadRoute';
import { Paths, ProjectPaths } from './types/routing.types';
import WomensIceHockeyCracoviaPagePasswordProtectedRoute from './WomenIceHockeyCracoviaPagePasswordProtectedRoute';

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
			<WomensIceHockeyCracoviaPagePasswordProtectedRoute>
				<Suspense fallback={<Spinner />}>
					{React.createElement(lazy(() => import('./../components/pages/projects/WomensIceHockeyCracovia/WomensIceHockeyCracoviaPage')))}
				</Suspense>
			</WomensIceHockeyCracoviaPagePasswordProtectedRoute>
		)
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
