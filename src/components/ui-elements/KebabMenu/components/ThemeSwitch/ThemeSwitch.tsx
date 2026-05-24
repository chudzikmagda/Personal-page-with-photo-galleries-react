import React, { useContext } from 'react';

import ThemeContext from '../../../../../contexts/ThemeContext';
import { ThemeContextType, Themes } from '../../../../../contexts/types/theme.types';
import MenuSwitch from '../MenuSwitch/MenuSwitch';
import { SwitchSides } from '../MenuSwitch/menuSwitch.types';
import MoonIcon from '../SvgIcons/MoonIcon';
import SunIcon from '../SvgIcons/SunIcon';
import { SWITCH_SIDES_THEMES_MAP, THEMES_SWITCH_SIDES_MAP } from './themeSwitch.types';

const ThemeSwitch: React.FC = () => {
	const themeContext: ThemeContextType = useContext<ThemeContextType>(ThemeContext);

	const getTheme = (switchSide: SwitchSides): Themes => {
		return SWITCH_SIDES_THEMES_MAP.get(switchSide) || Themes.LIGHT;
	};

	const getActiveSide = (): SwitchSides => {
		return THEMES_SWITCH_SIDES_MAP.get(themeContext.state) || SwitchSides.LEFT;
	};

	const handleThemeChange = (switchSide: SwitchSides): void => {
		const currentTheme: Themes = getTheme(switchSide);

		themeContext.onChange(currentTheme);
	};

	return (
		<MenuSwitch
			iconLeft={<SunIcon />}
			labelLeft={Themes.LIGHT}
			iconRight={<MoonIcon />}
			labelRight={Themes.DARK}
			initialActiveSide={getActiveSide()}
			handleClick={handleThemeChange}
		/>
	);
};

export default ThemeSwitch;
