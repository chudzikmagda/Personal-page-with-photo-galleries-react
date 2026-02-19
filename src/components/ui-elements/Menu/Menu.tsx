import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Paths } from '../../../routing/models/RoutingModels';
import KebabMenu from '../KebabMenu/KebabMenu';
import styles from './Menu.module.scss';
import { MenuItem } from './models/menu.models';

const Menu: React.FC = () => {
	const { t } = useTranslation();

	const menuItems: MenuItem[] = [
		{ menuTitle: t('Menu.about'), path: Paths.ABOUT },
		{ menuTitle: t('Menu.city'), path: Paths.CITY },
		{ menuTitle: t('Menu.landscape'), path: Paths.LANDSCAPE },
		{ menuTitle: t('Menu.prints'), path: Paths.PRINTS },
		{ menuTitle: t('Menu.contact'), path: Paths.CONTACT }
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
				<div className={styles['menu__kebab-menu']}>
					<KebabMenu />
				</div>
			</nav>
		</>
	);
};

export default Menu;
