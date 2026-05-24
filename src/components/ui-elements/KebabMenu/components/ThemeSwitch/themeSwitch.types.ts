import { Themes } from '../../../../../contexts/types/theme.types';
import { SwitchSides } from '../MenuSwitch/menuSwitch.types';

export const SWITCH_SIDES_THEMES_MAP: Map<SwitchSides, Themes> = new Map([
	[SwitchSides.LEFT, Themes.LIGHT],
	[SwitchSides.RIGHT, Themes.DARK]
]);

export const THEMES_SWITCH_SIDES_MAP: Map<Themes, SwitchSides> = new Map(
	Array.from(SWITCH_SIDES_THEMES_MAP, ([side, lang]: [SwitchSides, Themes]) => [lang, side])
);
