import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageContext from '../../../../../contexts/LanguageContext';
import { Languages } from '../../../../../contexts/types/languages.types';
import Tooltip from '../../../Tooltip/Tooltip';
import EnFlag from '../SvgIcons/EnFlag';
import PlFlag from '../SvgIcons/PlFlag';
import styles from './language-toggle.module.scss';

const LanguageToggle: React.FC = () => {
	const languageContext = useContext(LanguageContext);
	const { t } = useTranslation();

	const toggleLanguage = (): void => {
		languageContext.onChange(languageContext.state === Languages.PL ? Languages.EN : Languages.PL);
	};

	const languageLabel = t('Menu.changeLanguage');

	return (
		<Tooltip text={languageLabel}>
			<button type="button" aria-label={languageLabel} className={`${styles.control}`} onClick={toggleLanguage}>
				{languageContext.state === Languages.PL ? <PlFlag /> : <EnFlag />}
			</button>
		</Tooltip>
	);
};

export default LanguageToggle;
