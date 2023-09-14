import React from 'react';
import styles from './PageNotFound.module.scss';
import { t } from 'i18next';
import Button from '../../ui-elements/Button/Button';
import { ButtonApperance } from '../../ui-elements/Button/models/Button.model';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import heroImage from '../../../assets/images/template/page404-image-background.jpg';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';

const PageNotFound: React.FunctionComponent = () => {
	const navigate: NavigateFunction = useNavigate();

	return (
		<>
			<SEO title={t('PageNotFound.seo.title')} description={t('PageNotFound.seo.description')} keywords={t('PageNotFound.seo.keywords')} />

			<Layout
				content={
					<div className={styles.pageNotFound}>
						<div className={styles.pageNotFound__description}>
							<h1 className={styles.pageNotFound__code}>{t('PageNotFound.code')}</h1>
							<h2>{t('PageNotFound.description')}</h2>
							<Button apperance={ButtonApperance.PRIMARY_SOLID} cta={t('PageNotFound.cta')} onClick={() => navigate('/')} />
						</div>
						<div className={styles['pageNotFound__hero']}>
							<img src={heroImage} className={styles['pageNotFound__hero-image']} />
						</div>
					</div>
				}
			/>
		</>
	);
};

export default PageNotFound;
