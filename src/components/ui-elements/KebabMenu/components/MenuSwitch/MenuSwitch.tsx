import React, { useState } from 'react';
import { MenuSwitchProps, SwitchSides } from '../../models/switch.models';
import styles from './MenuSwitch.module.scss';

const MenuSwitch: React.FC<MenuSwitchProps> = ({ iconLeft, labelLeft, iconRight, labelRight, initialActiveSide, handleClick }) => {
	const [activeSide, setActiveSide] = useState(initialActiveSide);

	const onSwitchClick = (side: SwitchSides) => {
		handleClick(side);
		setActiveSide(side);
	};

	return (
		<div className={styles.menuSwitch}>
			<div
				onClick={() => onSwitchClick(SwitchSides.LEFT)}
				className={`${styles.menuSwitch__element} ${activeSide === SwitchSides.LEFT ? styles['menuSwitch__element--active'] : ''}`}>
				{iconLeft}
				<span className={styles.menuSwitch__label}>{labelLeft}</span>
			</div>
			<div
				onClick={() => onSwitchClick(SwitchSides.RIGHT)}
				className={`${styles.menuSwitch__element} ${activeSide === SwitchSides.RIGHT ? styles['menuSwitch__element--active'] : ''}`}>
				{iconRight}
				<span className={styles.menuSwitch__label}>{labelRight}</span>
			</div>
		</div>
	);
};

export default MenuSwitch;
