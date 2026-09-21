const COOKIEYES_ALLOWED_HOSTS = ['magdachudzik.pl', 'www.magdachudzik.pl'];
const COOKIEYES_SCRIPT_ID = 'cookieyes';
const COOKIEYES_SRC = 'https://cdn-cookieyes.com/client_data/7f55a4435556b725252fb524/script.js';

export const initCookieYes = (): void => {
  if (!COOKIEYES_ALLOWED_HOSTS.includes(window.location.hostname)) return;
  if (document.getElementById(COOKIEYES_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = COOKIEYES_SCRIPT_ID;
  script.type = 'text/javascript';
  script.src = COOKIEYES_SRC;
  script.defer = true;
  document.head.appendChild(script);
};
