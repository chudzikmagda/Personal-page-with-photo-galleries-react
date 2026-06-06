import { t } from 'i18next';
import React from 'react';

import styles from './spinner.module.scss';

const Spinner: React.FC = () => {
	return (
		<div className={styles.spinner}>
			<div className={styles.spinner__icon}>
				<div className={styles.spinner__item}></div>
				<div className={styles.spinner__item}></div>
				<div className={styles.spinner__item}></div>
				<div className={styles.spinner__item}></div>
				<div className={styles.spinner__item}></div>
				<div className={styles.spinner__item}></div>
				<div className={styles.spinner__item}></div>
				<div className={styles.spinner__item}></div>
			</div>
			<h6>{`${t('Spinner.description')} `}</h6>
		</div>
	);
};

export default Spinner;
