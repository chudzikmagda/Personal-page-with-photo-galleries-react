import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import ThemeContext from '../../../../../contexts/ThemeContext';
import { Themes } from '../../../../../contexts/types/theme.types';
import Tooltip from '../../../Tooltip/Tooltip';
import MoonIcon from '../SvgIcons/MoonIcon';
import SunIcon from '../SvgIcons/SunIcon';
import styles from './theme-toggle.module.scss';

const ThemeToggle: React.FC = () => {
	const themeContext = useContext(ThemeContext);
	const { t } = useTranslation();

	const toggleTheme = (): void => {
		const newTheme = themeContext.state === Themes.DARK ? Themes.LIGHT : Themes.DARK;
		themeContext.onChange(newTheme);
	};

	return (
		<Tooltip text={t('Menu.changeMode')}>
			<button type="button" aria-label={t('Menu.changeMode')} className={`${styles.control}`} onClick={toggleTheme}>
				{themeContext.state === Themes.DARK ? <MoonIcon /> : <SunIcon />}
			</button>
		</Tooltip>
	);
};

export default ThemeToggle;
