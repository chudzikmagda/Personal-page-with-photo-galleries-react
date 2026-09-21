import type React from 'react';

import IconMenu from '~/components/ui-elements/icon-menu/IconMenu';
import Logotype from '~/components/ui-elements/logotype/Logotype';
import Menu from '~/components/ui-elements/menu/Menu';

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logotype />
      </div>
      <div className={styles.header__menu}>
        <Menu />
      </div>
      <div className={styles['header__icon-menu']}>
        <IconMenu />
      </div>
    </header>
  );
};

export default Header;
