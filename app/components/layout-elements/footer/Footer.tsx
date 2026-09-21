import type React from 'react';
import { useTranslation } from 'react-i18next';

import { SocialMediaMenuVariant } from '~/components/ui-elements/social-media-menu/social-media-menu.types';
import SocialMediaMenu from '~/components/ui-elements/social-media-menu/SocialMediaMenu';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__social-media']}>
        <SocialMediaMenu variant={SocialMediaMenuVariant.ICONS} />
      </div>
      <a
        href="https://dev.magdachudzik.pl"
        className={`${styles.footer__link}`}
        target="_blank"
        rel="noreferrer"
      >
        {t('Footer.designAndDeveloped')} <span className={styles.footer__author}>{'{ MCH }'}</span>
      </a>
    </footer>
  );
};

export default Footer;
