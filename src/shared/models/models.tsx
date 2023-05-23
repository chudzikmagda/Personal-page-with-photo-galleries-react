export enum SocialMediaNames {
	BEHANCE = 'Behance',
	INSTAGRAM = 'Instagram',
	FACEBOOK = 'Facebook',
	LINKEDIN = 'Linkedin'
}

type SocialMediaPath = {
	[key in SocialMediaNames]: string;
};

export type SocialMedia = {
	name: SocialMediaNames;
	path: string;
};

export const SocialMediaPaths: SocialMediaPath = {
	[SocialMediaNames.INSTAGRAM]: 'https://www.instagram.com/chudzikmagda',
	[SocialMediaNames.FACEBOOK]: 'https://www.facebook.com/chudzikmagda',
	[SocialMediaNames.BEHANCE]: 'https://www.behance.net/magdachudzik',
	[SocialMediaNames.LINKEDIN]: 'https://www.linkedin.com/in/chudzikmagda'
};
