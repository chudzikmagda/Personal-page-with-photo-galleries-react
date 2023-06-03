import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as enTranslations from './i18n/en/';
import * as plTranslations from './i18n/pl/';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: enTranslations },
			pl: { translation: plTranslations }
		},
		fallbackLng: 'en',
		supportedLngs: ['en', 'pl'],
		debug: false,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
