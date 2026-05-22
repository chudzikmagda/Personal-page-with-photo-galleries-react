import { t } from 'i18next';
import React from 'react';

import { ContentType } from '../../layout-elements/Content/content.types';
import Layout from '../../layout-elements/Layout/Layout';
import SEO from '../../SEO/SEO';
import PrintItem from './components/Print/Print';
import { Print, printCollection } from './components/Print/print.types';
import styles from './PrintsPage.module.scss';

const PrintsPage: React.FC = () => {
	return (
		<>
			<SEO title={t('PrintsPage.seo.title')} description={t('PrintsPage.seo.description')} keywords={t('PrintsPage.seo.keywords')} />

			<Layout
				content={
					<>
						<div className={styles['wrapper-s']}>
							<h1>{t('PrintsPage.title')}</h1>
							<p>{t('PrintsPage.longDescription')}</p>
							<h3>{t('PrintsPage.shortDescription')}</h3>
						</div>
						<div className={`${styles.wrapper} ${styles.prints}`}>
							{printCollection.map((print: Print, index: number) => {
								return (
									<div key={index} className={styles.prints__item}>
										<PrintItem title={print.title} image={print.image} ctaUrl={print.ctaUrl} />
									</div>
								);
							})}
						</div>
					</>
				}
				contentType={ContentType.GRID}
			/>
		</>
	);
};

export default PrintsPage;
