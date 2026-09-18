import i18n from '~/i18n';
import { Languages } from '~/contexts/types/languages.types';

export const getLanguage = (): Languages => {
  return i18n.language === Languages.EN ? Languages.EN : Languages.PL;
};

export const getLanguageLocale = (): string => {
  return getLanguage() === Languages.EN ? 'en_US' : 'pl_PL';
};
