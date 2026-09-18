import type { ComponentType, SVGProps } from 'react';

import BehanceIcon from './../../assets/images/template/social-media/behance.svg?react';
import FacebookIcon from './../../assets/images/template/social-media/facebook.svg?react';
import InstagramLogo from './../../assets/images/template/social-media/instagram.svg?react';
import LinkedinIcon from './../../assets/images/template/social-media/linkedin.svg?react';

export enum SocialMediaNames {
	BEHANCE = 'Behance',
	INSTAGRAM = 'Instagram',
	FACEBOOK = 'Facebook',
	LINKEDIN = 'Linkedin'
}

type SocialMediaIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialMedia = {
	icon: SocialMediaIcon;
	name: SocialMediaNames;
	path: string;
};

export const SOCIAL_MEDIA: SocialMedia[] = [
	{ icon: InstagramLogo, name: SocialMediaNames.INSTAGRAM, path: 'https://www.instagram.com/chudzikmagda' },
	{ icon: FacebookIcon, name: SocialMediaNames.FACEBOOK, path: 'https://www.facebook.com/chudzikmagda' },
	{ icon: BehanceIcon, name: SocialMediaNames.BEHANCE, path: 'https://www.behance.net/magdachudzik' },
	{ icon: LinkedinIcon, name: SocialMediaNames.LINKEDIN, path: 'https://www.linkedin.com/in/chudzikmagda' }
];
