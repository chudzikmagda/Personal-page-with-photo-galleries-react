import React, { ReactElement } from 'react';
import styles from './Footer.module.scss';
import { SocialMediaPaths } from '../../../shared/models/models';
import { SocialMedia } from '../../../shared/models/models';

const Footer = (): ReactElement => {
	const footerSocialMediaPaths: SocialMedia[] = Object.entries(SocialMediaPaths).map(([name, path]) => ({ name, path } as SocialMedia));

	return (
		<footer className={styles.footer}>
			<div className={styles['footer__social-media']}>
				{footerSocialMediaPaths.map((footerSocialMediaPath: SocialMedia) => {
					return (
						<>
							<a href={footerSocialMediaPath.path} className={styles.footer__link} target="_blank" rel="noopener noreferrer">
								{footerSocialMediaPath.name}
							</a>
						</>
					);
				})}
			</div>
			{
				<a
					href="https://frontend.magdachudzik.pl"
					className={`${styles.footer__link} ${styles['footer__link--author']}`}
					target="_blank"
					rel="noreferrer">
					Designed and developed by <span className={styles.footer__author}>{'{ MCH }'}</span>
				</a>
			}
		</footer>
	);
};

export default Footer;
