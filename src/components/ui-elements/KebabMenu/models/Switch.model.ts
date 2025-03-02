import { ReactNode } from 'react';

export interface MenuSwitchProps {
	iconLeft: ReactNode;
	labelLeft: string;
	iconRight: ReactNode;
	labelRight: string;
	initialActiveSide: SwitchSides;
	handleClick: (value: SwitchSides) => void;
}

export enum SwitchSides {
	LEFT = 'Left',
	RIGHT = 'Right'
}
