import React from 'react';

import { SOCIAL_MEDIA, SocialMedia } from '../../../shared/types/socialMedia.types';
import styles from './socialMediaMenu.module.scss';
import { SocialMediaMenuProps, SocialMediaMenuVariant } from './socialMediaMenu.types';

const SocialMediaMenu: React.FC<SocialMediaMenuProps> = ({ variant }) => {
	return (
		<nav className={styles.menu} aria-label="Social media links">
			{SOCIAL_MEDIA.map((socialMedia: SocialMedia) => {
				const Icon = socialMedia.icon;

				return (
					<a
						href={socialMedia.path}
						rel="noopener noreferrer"
						className={styles.menu__link}
						target="_blank"
						aria-label={socialMedia.name}
						key={socialMedia.name}>
						{variant === SocialMediaMenuVariant.TEXT ? (
							socialMedia.name
						) : (
							<span className={styles.menu__icon}>
								<Icon />
							</span>
						)}
					</a>
				);
			})}
		</nav>
	);
};

export default SocialMediaMenu;
