import React, { ReactElement } from 'react';
import Layout from '../../Layout/Layout';
import styles from './PageNotFound.module.scss';
import { t } from 'i18next';
import Button from '../../ui-elements/Button/Button';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import heroImage from '../../../assets/images/template/page404-image-background.jpg';

const PageNotFound = (): ReactElement => {
	const navigate: NavigateFunction = useNavigate();

	return (
		<Layout
			content={
				<div className={styles.pageNotFound}>
					<div className={styles.pageNotFound__description}>
						<h1 className={styles.pageNotFound__code}>{t('PageNotFound.code')}</h1>
						<h2>{t('PageNotFound.description')}</h2>
						<Button apperance="primary-solid" cta={t('PageNotFound.cta')} onClick={() => navigate('/')} />
					</div>
					<div className={styles['pageNotFound__hero']}>
						<img src={heroImage} className={styles['pageNotFound__hero-image']} />
					</div>
				</div>
			}
		/>
	);
};

export default PageNotFound;
