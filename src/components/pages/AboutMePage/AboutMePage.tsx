import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ContentType } from '../../layout-elements/Content/content.types';
import PageShell from '../../layout-elements/PageShell/PageShell';
import SocialMediaMenu from '../../ui-elements/SocialMediaMenu/SocialMediaMenu';
import { SocialMediaMenuVariant } from '../../ui-elements/SocialMediaMenu/socialMediaMenu.types';
import heroImage from './../../../assets/images/template/photographer-magda-chudzik.webp';
import styles from './aboutMePage.module.scss';

const AboutMePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<PageShell
			title={t('AboutMePage.seo.title')}
			description={t('AboutMePage.seo.description')}
			keywords={t('AboutMePage.seo.keywords')}
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
									a: <a href="https://dev.magdachudzik.pl" target="_blank" rel="noopener noreferrer" />
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
							<SocialMediaMenu variant={SocialMediaMenuVariant.TEXT} />
						</p>
					</div>
				</>
			}
			contentType={ContentType.GRID}
		/>
	);
};

export default AboutMePage;
