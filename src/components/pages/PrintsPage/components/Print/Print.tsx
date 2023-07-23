import React, { ReactElement } from 'react';
import styles from './Print.module.scss';
import { PrintProps } from './models/PrintModels';
import Button from '../../../../ui-elements/Button/Button';
import { t } from 'i18next';

const PrintItem = (props: PrintProps): ReactElement => {
	const navigateToLink = (): void => {
		window.open(props.ctaUrl, '_blank');
	};

	return (
		<div className={styles.print}>
			<img src={props.image} className={styles.print__image} alt={props.title} onClick={navigateToLink} />
			<div className={styles.print__description}>
				<h5 className={styles.print__title}>{props.title}</h5>
				<Button cta={t('PrintsPage.cta')} apperance="primary-solid" onClick={navigateToLink} />
			</div>
		</div>
	);
};

export default PrintItem;
