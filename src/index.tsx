import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './index.scss';
import Router from './routing/Routing';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<RouterProvider router={Router} />
	</React.StrictMode>
);

reportWebVitals();
