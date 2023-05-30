import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, MenuItems } from './models/MenuModels';
import { Paths } from '../../../routing/models/RoutingModels';
import styles from './Menu.module.scss';

const Menu = (): ReactElement => {
	const menuItems: MenuItem[] = [
		{ menuTitle: MenuItems.ABOUT, path: Paths.ABOUT },
		{ menuTitle: MenuItems.CITY, path: Paths.CITY },
		{ menuTitle: MenuItems.LANDSCAPE, path: Paths.LANDSCAPE },
		{ menuTitle: MenuItems.PRINTS, path: Paths.PRINTS },
		{ menuTitle: MenuItems.CONTACT, path: Paths.CONTACT }
	];

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
				{menuItems.map((menuItem: MenuItem, index: number) => {
					return (
						<span key={index} className={styles['menu__item-wrapper']}>
							<NavLink to={`/${menuItem.path}`} className={styles.menu__item} style={{ animationDelay: `${index / 3}s` }}>
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
