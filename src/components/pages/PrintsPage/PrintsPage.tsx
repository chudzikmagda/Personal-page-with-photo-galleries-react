import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContentType } from '../../layout-elements/Content/content.types';
import PageShell from '../../layout-elements/PageShell/PageShell';
import PrintItem from './components/Print/Print';
import { printCollection } from './components/Print/print.data';
import { Print } from './components/Print/print.types';
import styles from './printsPage.module.scss';

const PrintsPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<PageShell
			title={t('PrintsPage.seo.title')}
			description={t('PrintsPage.seo.description')}
			keywords={t('PrintsPage.seo.keywords')}
			content={
				<>
					<div className={styles['wrapper-s']}>
						<h1>{t('PrintsPage.title')}</h1>
						<p>{t('PrintsPage.longDescription')}</p>
						<h3>{t('PrintsPage.shortDescription')}</h3>
					</div>
					<div className={`${styles.wrapper} ${styles.prints}`}>
						{printCollection.map((print: Print) => {
							return (
								<div key={print.id} className={styles.prints__item}>
									<PrintItem titleKey={print.titleKey} image={print.image} cta={print.cta} />
								</div>
							);
						})}
					</div>
				</>
			}
			contentType={ContentType.GRID}
		/>
	);
};

export default PrintsPage;
