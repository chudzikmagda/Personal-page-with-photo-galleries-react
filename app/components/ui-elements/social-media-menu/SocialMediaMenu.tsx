import styles from './social-media-menu.module.scss';
import { SocialMediaMenuVariant, type SocialMediaMenuProps } from './social-media-menu.types';
import { SOCIAL_MEDIA, type SocialMedia } from '~/shared/types/social-media.types';

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
            key={socialMedia.name}
          >
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
