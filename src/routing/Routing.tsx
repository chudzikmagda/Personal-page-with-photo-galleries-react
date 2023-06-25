import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Paths } from './models/RoutingModels';
import LandscapePage from '../components/pages/LandscapePage/LandscapePage';
import AboutMe from '../components/pages/AboutMe/AboutMe';
import City from '../components/pages/City/City';
import ColorLandscape from '../components/pages/ColorLandscape/ColorLandscape';
import BwLandscape from '../components/pages/BwLandscape/BwLandscape';

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
		element: <LandscapePage />
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.BW_LANDSCAPE}`,
		element: <BwLandscape />
	},
	{
		path: `${Paths.LANDSCAPE}/${Paths.COLOR_LANDSCAPE}`,
		element: <ColorLandscape />
	},
	{
		path: Paths.PRINTS,
		element: ''
	},
	{
		path: '*',
		element: '404'
	}
]);

export default Router;
