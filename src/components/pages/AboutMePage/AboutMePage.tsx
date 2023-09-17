import React from 'react';
import Layout from '../../layout-elements/Layout/Layout';
import { useTranslation } from 'react-i18next';
import heroImage from './../../../assets/images/template/photographer-magda-chudzik.jpg';
import styles from './AboutMePage.module.scss';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SocialMedia, SOCIAL_MEDIA } from '../../../shared/models/models';
import SEO from '../../SEO/SEO';

const AboutMePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO description={t('AboutMePage.seo.description')} keywords={t('AboutMePage.seo.keywords')} title={t('AboutMePage.seo.title')} />

			<Layout
				content={
					<>
						<div className={styles.wrapper}>
							<img src={heroImage} className={styles['about-me__heroImage']} alt="Magda Chudzik" />
						</div>
						<div className={styles['wrapper-s']}>
							<h1>{t('AboutMePage.title')}</h1>
							<h4>
								<Trans
									t={t}
									i18nKey="AboutMePage.intro"
									components={{
										strong: <strong />,
										a: <a href="https://www.frontend.magdachudzik.pl/" target="_blank" rel="noopener noreferrer" />
									}}
								/>
							</h4>
							<p>
								<Trans
									t={t}
									i18nKey="AboutMePage.paragraph1"
									components={{
										strong: <strong />,
										a: <Link to="/landscape" />,
										a2: <Link to="/landscape/black-and-white-landscape" />
									}}
								/>
							</p>
							<p>
								<Trans
									t={t}
									i18nKey="AboutMePage.paragraph2"
									components={{
										strong: <strong />
									}}
								/>
								socialMediaPath
							</p>
							<p>
								<Trans
									t={t}
									i18nKey="AboutMePage.paragraph3"
									components={{
										strong: <strong />,
										italic: <i />
									}}
								/>
							</p>
							<p>
								<Trans
									t={t}
									i18nKey="AboutMePage.paragraph4"
									components={{
										strong: <strong />
									}}
								/>
							</p>
							<p>
								<Trans
									t={t}
									i18nKey="AboutMePage.paragraph5"
									components={{
										strong: <strong />
									}}
								/>
							</p>
							<p>
								{`${t('AboutMePage.contact')} `}
								{SOCIAL_MEDIA.map((socialMedia: SocialMedia) => {
									return (
										<span key={socialMedia.name}>
											<a href={socialMedia.path} className={styles.footer__link} target="_blank" rel="noopener noreferrer">
												{socialMedia.name}
											</a>
											{', '}
										</span>
									);
								})}
							</p>
						</div>
					</>
				}
			/>
		</>
	);
};

export default AboutMePage;
