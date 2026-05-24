import { useState } from 'react';

import { Languages } from '../../contexts/types/languages.types';
import i18n from '../../i18n';

export const useLanguage = (): [Languages, (lang: Languages) => void] => {
	const [language, setLanguage] = useState<Languages>(i18n.language as Languages);

	const handleLanguageChange = (lang: Languages): void => {
		setLanguage(lang);
		i18n.changeLanguage(lang);
	};

	return [language, handleLanguageChange];
};
