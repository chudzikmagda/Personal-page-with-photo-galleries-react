import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import Gallery from '../../ui-elements/Gallery/Gallery';
import styles from './BwLandscapePage.module.scss';
import { bwImages } from './models/bwLandscapePage.models';

const BwLandscapePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<SEO
				title={t('BwLandscapePage.seo.title')}
				description={t('BwLandscapePage.seo.description')}
				keywords={t('BwLandscapePage.seo.keywords')}
			/>

			<Layout
				content={
					<div className={styles.wrapper}>
						<Gallery heading={`${t('BwLandscapePage.heading')}`} images={bwImages} />
					</div>
				}
			/>
		</>
	);
};

export default BwLandscapePage;
