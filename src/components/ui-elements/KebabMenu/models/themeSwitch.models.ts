import { Themes } from '../../../../contexts/models/theme.models';
import { SwitchSides } from './switch.models';

export const SWITCH_SIDES_THEMES_MAP: Map<SwitchSides, Themes> = new Map([
	[SwitchSides.LEFT, Themes.LIGHT],
	[SwitchSides.RIGHT, Themes.DARK]
]);

export const THEMES_SWITCH_SIDES_MAP: Map<Themes, SwitchSides> = new Map(
	Array.from(SWITCH_SIDES_THEMES_MAP, ([side, lang]: [SwitchSides, Themes]) => [lang, side])
);
