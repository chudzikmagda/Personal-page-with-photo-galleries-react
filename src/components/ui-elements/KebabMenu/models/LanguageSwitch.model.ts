import { Languages } from '../../../../contexts/models/languages.model';
import { SwitchSides } from './Switch.model';

export enum AvailableLanguages {
	EN = 'English',
	PL = 'Polski'
}

export const SWITCH_SIDES_LANGUAGES_MAP: Map<SwitchSides, Languages> = new Map([
	[SwitchSides.LEFT, Languages.EN],
	[SwitchSides.RIGHT, Languages.PL]
]);

export const LANGUAGES_SWITCH_SIDES_MAP: Map<Languages, SwitchSides> = new Map(
	Array.from(SWITCH_SIDES_LANGUAGES_MAP, ([side, lang]: [SwitchSides, Languages]) => [lang, side])
);
