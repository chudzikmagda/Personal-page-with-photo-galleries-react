import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from 'react-router';

import type { Route } from './+types/root';
import './app.scss';
import LanguageContext from './contexts/LanguageContext';
import ThemeContext from './contexts/ThemeContext';
import Spinner from './components/ui-elements/spinner/Spinner';
import { useLanguage } from './hooks/useLanguage/useLanguage';
import { useTheme } from './hooks/useTheme/useTheme';
import './i18n';

export const meta: Route.MetaFunction = () => [
  { charSet: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { title: 'Aplikacja' },
];

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  },
  { rel: 'icon', href: '/favicon.png' },
  { rel: 'shortcut icon', href: '/favicon.ico' },
  { rel: 'apple-touch-icon', href: '/favicon.png' },
];

export function Layout({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language || 'pl'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  const navigation = useNavigation();
  const isNavigating = navigation.state !== 'idle';

  return (
    <AppProviders>
      {isNavigating && (
        <div className="navigation-loader" role="status" aria-live="polite">
          <Spinner />
        </div>
      )}
      <Outlet />
    </AppProviders>
  );
}

const AppProviders: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useTheme();
  const [language, setLanguage] = useLanguage();

  return (
    <ThemeContext.Provider value={{ state: theme, onChange: setTheme }}>
      <LanguageContext.Provider value={{ state: language, onChange: setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { t } = useTranslation();
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404 ? t('PageNotFoundView.description') : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
