import React, { forwardRef, HTMLAttributes } from 'react';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import styles from './MenuOptions.module.scss';

const MenuOptions = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function MenuOptions(props, ref) {
	return (
		<div ref={ref} className={`${styles.menuOptions}`} style={props.style}>
			<div>
				<span className={styles.kebabMenuOptions__label}>Language</span>
				<LanguageSwitch />
			</div>
		</div>
	);
});

export default MenuOptions;
