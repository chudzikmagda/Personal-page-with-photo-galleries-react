import './i18n';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import { hotjar } from 'react-hotjar';

import App from './App';
import reportWebVitals from './reportWebVitals';

const TRACKING_ID = 'G-11Z8MHVWS1';
const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

ReactGA.initialize(TRACKING_ID);

hotjar.initialize({ id: 1141369, sv: 6 });

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
