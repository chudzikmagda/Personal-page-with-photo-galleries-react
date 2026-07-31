import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import ThemeContext from '../../../../../contexts/ThemeContext';
import { Themes } from '../../../../../contexts/types/theme.types';
import Tooltip from '../../../../ui-elements/Tooltip/Tooltip';
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

	const iconColor = themeContext.state === Themes.DARK ? 'rgb(253, 253, 253)' : 'rgb(15, 15, 15)';

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			className={`${styles.control}`}
			onClick={toggleTheme}
			style={{ '--icon-color': iconColor } as React.CSSProperties}>
			<Tooltip text={t('Menu.changeMode')}>{themeContext.state === Themes.DARK ? <MoonIcon /> : <SunIcon />}</Tooltip>
		</button>
	);
};

export default ThemeToggle;
