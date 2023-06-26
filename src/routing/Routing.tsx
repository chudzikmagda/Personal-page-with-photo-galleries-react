import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Paths } from './models/RoutingModels';
import useLazyLoadRoute from '../hooks/useLazyLoadRoute/useLazyLoadRoute';

const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: Paths.ABOUT,
		element: useLazyLoadRoute('AboutMe')
	},
	{
		path: Paths.CITY,
		element: useLazyLoadRoute('City')
	},
	{
		path: Paths.CONTACT,
		element: ''
	},
	{
		path: Paths.LANDSCAPE,
		element: useLazyLoadRoute('LandscapePage')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`,
		element: useLazyLoadRoute('BwLandscape')
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`,
		element: useLazyLoadRoute('ColorLandscape')
	},
	{
		path: Paths.PRINTS,
		element: ''
	},
	{
		path: '/',
		element: <App />
	},
	{
		path: '*',
		element: '404'
	}
]);

export default Router;
