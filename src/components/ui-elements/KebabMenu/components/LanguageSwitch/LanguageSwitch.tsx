import React, { useContext, useEffect } from 'react';

import LanguageContext from '../../../../../contexts/LanguageContext';
import { LanguageContextType, Languages } from '../../../../../contexts/types/languages.types';
import MenuSwitch from '../MenuSwitch/MenuSwitch';
import { SwitchSides } from '../MenuSwitch/menuSwitch.types';
import EnFlag from '../SvgIcons/EnFlag';
import PlFlag from '../SvgIcons/PlFlag';
import { AvailableLanguages, LANGUAGES_SWITCH_SIDES_MAP, SWITCH_SIDES_LANGUAGES_MAP } from './languageSwitch.types';

const LanguageSwitch: React.FC = () => {
	const languageContext: LanguageContextType = useContext<LanguageContextType>(LanguageContext);

	const getLanguage = (switchSide: SwitchSides): Languages => {
		return SWITCH_SIDES_LANGUAGES_MAP.get(switchSide) || Languages.EN;
	};

	const getActiveSide = (): SwitchSides => {
		return LANGUAGES_SWITCH_SIDES_MAP.get(languageContext.state) || SwitchSides.LEFT;
	};

	const handleLanguageChange = (switchSide: SwitchSides): void => {
		languageContext.onChange(getLanguage(switchSide));
	};

	useEffect(() => {
		handleLanguageChange(getActiveSide());
	}, [languageContext.state]);

	return (
		<MenuSwitch
			iconLeft={<EnFlag />}
			labelLeft={AvailableLanguages.EN}
			iconRight={<PlFlag />}
			labelRight={AvailableLanguages.PL}
			initialActiveSide={getActiveSide()}
			handleClick={handleLanguageChange}
		/>
	);
};

export default LanguageSwitch;
