import React, { useContext, useEffect } from 'react';
import { ThemeContextType, Themes } from '../../../../../contexts/models/Theme.model';
import ThemeContext from '../../../../../contexts/ThemeContext';
import { SwitchSides } from '../../models/Switch.model';
import { SWITCH_SIDES_THEMES_MAP, THEMES_SWITCH_SIDES_MAP } from '../../models/ThemeSwitch.model';
import MenuSwitch from '../MenuSwitch/MenuSwitch';
import MoonIcon from '../SvgIcons/MoonIcon';
import SunIcon from '../SvgIcons/SunIcon';

const ThemeSwitch: React.FC = () => {
	const themeContext: ThemeContextType = useContext<ThemeContextType>(ThemeContext);

	const getTheme = (switchSide: SwitchSides): Themes => {
		return SWITCH_SIDES_THEMES_MAP.get(switchSide) || Themes.LIGHT;
	};

	const getActiveSide = (): SwitchSides => {
		return THEMES_SWITCH_SIDES_MAP.get(themeContext.state) || SwitchSides.LEFT;
	};

	const handleThemeChange = (switchSide: SwitchSides): void => {
		themeContext.onChange(getTheme(switchSide));
	};

	useEffect(() => {
		handleThemeChange(getActiveSide());
	}, [themeContext.state]);

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
