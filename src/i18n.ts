import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as enTranslations from './i18n/en/';
import * as plTranslations from './i18n/pl/';

const retrieveLanguageFromStorage = (): string | null => {
	return localStorage.getItem('i18nextLng');
};

const retrieveLanguageFromBrowser = (): string | null => {
	return navigator.language.substring(0, 2);
};

i18n.use(detector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: enTranslations },
			pl: { translation: plTranslations }
		},
		lng: retrieveLanguageFromStorage() || retrieveLanguageFromBrowser() || 'pl',
		fallbackLng: 'en',
		supportedLngs: ['en', 'pl'],
		load: 'languageOnly',
		debug: false,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
