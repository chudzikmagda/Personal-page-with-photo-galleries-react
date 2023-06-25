import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Paths } from './models/RoutingModels';
import LandscapePage from '../components/pages/LandscapePage/LandscapePage';
import AboutMe from '../components/pages/AboutMe/AboutMe';
import City from '../components/pages/City/City';

const Router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: Paths.ABOUT,
		element: <AboutMe />
	},
	{
		path: Paths.CITY,
		element: <City />
	},
	{
		path: Paths.CONTACT,
		element: ''
	},
	{
		path: Paths.LANDSCAPE,
		element: <LandscapePage />,
		children: [
			{
				path: Paths.BW_LANDSCAPE,
				element: ''
			},
			{
				path: Paths.COLOR_LANDSCAPE,
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
