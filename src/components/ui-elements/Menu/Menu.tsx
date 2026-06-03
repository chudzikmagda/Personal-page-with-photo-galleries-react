import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { menuItems } from './menu.data';
import styles from './menu.module.scss';
import { MenuItem } from './menu.types';

const Menu: React.FC = () => {
	const { t } = useTranslation();
	const menu: MenuItem[] = menuItems.map((menuItem) => ({
		menuTitle: t(menuItem.menuTitleKey),
		path: menuItem.path
	}));

	const [isOpen, setIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

	const onMobileMenuToggle = (): void => {
		return setIsOpen(!isOpen);
	};

	return (
		<>
			<button onClick={onMobileMenuToggle} className={`${styles.hamburger} ${isOpen ? styles['hamburger--isOpen'] : ''}`}>
				<span className={styles.hamburger__item}></span>
				<span className={styles.hamburger__item}></span>
				<span className={styles.hamburger__item}></span>
			</button>

			<nav className={styles.menu}>
				{menu.map((menuItem: MenuItem, index: number) => {
					return (
						<span key={menuItem.menuTitle + index} className={styles['menu__item-wrapper']}>
							<NavLink
								to={`/${menuItem.path}`}
								className={({ isActive }) =>
									isActive ? `${styles.menu__item} ${styles['menu__item--active']}` : `${styles.menu__item}`
								}
								style={{ animationDelay: `${index / 3}s` }}>
								{menuItem.menuTitle}
							</NavLink>
						</span>
					);
				})}
			</nav>
		</>
	);
};

export default Menu;
