import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Paths } from './models/RoutingModels';

const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: Paths.ABOUT,
		element: ''
	},
	{
		path: Paths.CITY,
		element: ''
	},
	{
		path: Paths.CONTACT,
		element: ''
	},
	{
		path: Paths.LANDSCAPES,
		element: '',
		children: [
			{
				path: Paths.BW_LANDSCAPES,
				element: ''
			},
			{
				path: Paths.COLOR_LANDSCAPES,
				element: ''
			}
		]
	},
	{
		path: Paths.PRINTS,
		element: ''
	},
	{
		path: '*',
		element: ''
	}
]);

export default Router;
