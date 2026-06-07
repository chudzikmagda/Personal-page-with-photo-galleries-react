import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../../ui-elements/Button/Button';
import { ButtonApperance } from '../../../../ui-elements/Button/button.types';
import styles from './print.module.scss';
import { Print } from './print.types';

const PrintItem: React.FC<Print> = ({ image, titleKey, cta }): ReactElement => {
	const { t } = useTranslation();

	const navigateToLink = (): void => {
		window.open(cta, '_blank');
	};

	return (
		<div className={styles.print}>
			<img src={image} className={styles.print__image} loading="lazy" alt={t(titleKey)} onClick={navigateToLink} />
			<div className={styles.print__description}>
				<h5 className={styles.print__title}>{t(titleKey)}</h5>
				<Button cta={t('PrintsPage.cta')} apperance={ButtonApperance.PRIMARY_SOLID} onClick={navigateToLink} />
			</div>
		</div>
	);
};

export default PrintItem;
