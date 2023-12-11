import { ReactComponent as InstagramLogo } from './../../assets/images/template/social-media/instagram.svg';
import { ReactComponent as FacebookIcon } from './../../assets/images/template/social-media/facebook.svg';
import { ReactComponent as BehanceIcon } from './../../assets/images/template/social-media/behance.svg';
import { ReactComponent as LinkedinIcon } from './../../assets/images/template/social-media/linkedin.svg';
import React, { ReactElement } from 'react';

export enum SocialMediaNames {
	BEHANCE = 'Behance',
	INSTAGRAM = 'Instagram',
	FACEBOOK = 'Facebook',
	LINKEDIN = 'Linkedin'
}

export type SocialMedia = {
	icon: ReactElement;
	name: SocialMediaNames;
	path: string;
};

export const SOCIAL_MEDIA: SocialMedia[] = [
	{ icon: <InstagramLogo />, name: SocialMediaNames.INSTAGRAM, path: 'https://www.instagram.com/chudzikmagda' },
	{ icon: <FacebookIcon />, name: SocialMediaNames.FACEBOOK, path: 'https://www.facebook.com/chudzikmagda' },
	{ icon: <BehanceIcon />, name: SocialMediaNames.BEHANCE, path: 'https://www.behance.net/magdachudzik' },
	{ icon: <LinkedinIcon />, name: SocialMediaNames.LINKEDIN, path: 'https://www.linkedin.com/in/chudzikmagda' }
];

export enum Breakpoints {
	SMALL = 480,
	MEDIUM = 768,
	LARGE = 1024
}
