import React, { forwardRef } from 'react';
import { MenuIconProps } from '../../models/MenuIcon.model';
import styles from './MenuIcon.module.scss';

const MenuIcon = forwardRef<HTMLDivElement, MenuIconProps>(function menuIcon(props, ref) {
	const { isMenuOpen, ...restProps } = props;

	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			className={`${styles.menuIcon} ${isMenuOpen && styles['menuIcon--clicked']}`}
			{...restProps}>
			{Array.from({ length: 3 }).map((_, index) => {
				return <span key={index} className={styles.menuIcon__circle}></span>;
			})}
		</div>
	);
});

export default MenuIcon;
