import React from 'react';
import styles from './Footer.module.scss';
import { SOCIAL_MEDIA } from '../../../shared/models/models';
import { SocialMedia } from '../../../shared/models/models';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<div className={styles['footer__social-media']}>
				{SOCIAL_MEDIA.map((socialMedia: SocialMedia) => {
					return (
						<a key={socialMedia.name} href={socialMedia.path} className={styles.footer__link} target="_blank" rel="noopener noreferrer">
							<span className={styles['footer__link-icon']}>{socialMedia.icon}</span>{' '}
							<span className={styles['footer__link-name']}>{socialMedia.name}</span>
						</a>
					);
				})}
			</div>
			{
				<a
					href="https://dev.magdachudzik.pl"
					className={`${styles.footer__link} ${styles['footer__link--author']}`}
					target="_blank"
					rel="noreferrer">
					{t('Footer.designAndDeveloped')} <span className={styles.footer__author}>{'{ MCH }'}</span>
				</a>
			}
		</footer>
	);
};

export default Footer;
