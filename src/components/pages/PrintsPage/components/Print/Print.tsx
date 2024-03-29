import React, { ReactElement } from 'react';
import styles from './Print.module.scss';
import { PrintProps } from './models/PrintModels';
import Button from '../../../../ui-elements/Button/Button';
import { ButtonApperance } from '../../../../ui-elements/Button/models/Button.model';
import { t } from 'i18next';

const PrintItem: React.FC<PrintProps> = ({ image, title, ctaUrl }): ReactElement => {
	const navigateToLink = (): void => {
		window.open(ctaUrl, '_blank');
	};

	return (
		<div className={styles.print}>
			<img src={image} className={styles.print__image} loading="lazy" alt={title} onClick={navigateToLink} />
			<div className={styles.print__description}>
				<h5 className={styles.print__title}>{title}</h5>
				<Button cta={t('PrintsPage.cta')} apperance={ButtonApperance.PRIMARY_SOLID} onClick={navigateToLink} />
			</div>
		</div>
	);
};

export default PrintItem;
