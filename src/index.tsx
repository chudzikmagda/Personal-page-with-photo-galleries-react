import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './i18n';
import './index.scss';
import App from './App';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-11Z8MHVWS1';

ReactGA.initialize(TRACKING_ID);

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
