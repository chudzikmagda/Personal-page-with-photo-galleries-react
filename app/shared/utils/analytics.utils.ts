import ReactGA from 'react-ga4';
import hotjarPkg from 'react-hotjar';

import { initCookieYes } from './cookies.utils';

const { hotjar } = hotjarPkg;

const GA_TRACKING_ID = 'G-11Z8MHVWS1';
const HOTJAR_ID = 1141369;
const HOTJAR_SNIPPET_VERSION = 6;

let isInitialized = false;

export const initAnalytics = (): void => {
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  ReactGA.initialize(GA_TRACKING_ID);
  hotjar.initialize({ id: HOTJAR_ID, sv: HOTJAR_SNIPPET_VERSION });
  initCookieYes();
};
