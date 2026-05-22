import React from 'react';
import { useTranslation } from 'react-i18next';

import { SOCIAL_MEDIA, SocialMedia } from '../../../shared/types/socialMedia.types';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
	const { t } = useTranslation();

	return (
		<footer className={styles.footer}>
			<div className={styles['footer__social-media']}>
				{SOCIAL_MEDIA.map((socialMedia: SocialMedia) => {
					const Icon = socialMedia.icon;

					return (
						<a key={socialMedia.name} href={socialMedia.path} className={styles.footer__link} target="_blank" rel="noopener noreferrer">
							<span className={styles['footer__link-icon']}>
								<Icon />
							</span>{' '}
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
