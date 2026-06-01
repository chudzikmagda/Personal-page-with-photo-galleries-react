import React from 'react';

import { SOCIAL_MEDIA, SocialMedia } from '../../../shared/types/socialMedia.types';
import styles from './SocialMediaMenu.module.scss';
const SocialMediaMenu: React.FC = () => {
	return (
		<nav className={styles.menu} aria-label="Social media links">
			{SOCIAL_MEDIA.map((socialMedia: SocialMedia) => {
				const Icon = socialMedia.icon;

				return (
					<a
						href={socialMedia.path}
						className={styles.menu__link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={socialMedia.name}
						key={socialMedia.name}>
						<span className={styles.menu__icon}>
							<Icon />
						</span>
					</a>
				);
			})}
		</nav>
	);
};

export default SocialMediaMenu;
