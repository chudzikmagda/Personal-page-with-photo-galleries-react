import React from 'react';
import styles from './PrintsPage.module.scss';
import PrintItem from './components/Print/Print';
import { printCollection } from './components/Print/models/PrintModels';
import { Print } from './components/Print/models/PrintModels';
import { t } from 'i18next';
import Layout from '../../layout-elements/Layout/Layout';

const PrintsPage: React.FC = () => {
	return (
		<Layout
			content={
				<>
					<div className={styles['wrapper-s']}>
						<h1>{t('Prints.title')}</h1>
						<p>{t('Prints.longDescription')}</p>
						<h3>{t('Prints.shortDescription')}</h3>
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
		/>
	);
};

export default PrintsPage;
