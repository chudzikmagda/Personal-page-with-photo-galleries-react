import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Paths } from './models/RoutingModels';
import useLazyLoadRoute from '../hooks/useLazyLoadRoute/useLazyLoadRoute';

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
		element: <App />
	},
	{
		path: '*',
		element: useLazyLoadRoute('PageNotFound')
	}
]);

export default Router;
