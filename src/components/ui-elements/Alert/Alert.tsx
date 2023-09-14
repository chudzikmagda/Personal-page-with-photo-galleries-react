/* eslint-disable indent */
import React, { useMemo, useState } from 'react';
import styles from './Alert.module.scss';
import Button from '../Button/Button';
import { AlertProps, AlertType } from './models/Alert.model';
import { useTranslation } from 'react-i18next';

const Alert: React.FC<AlertProps> = ({ content, header, type }) => {
	const { t } = useTranslation();

	const [isAlertVisible, setIsAlertVisible] = useState(true);

	const closeAlert = (): void => {
		setIsAlertVisible(false);
	};

	const headerClassNames: string = useMemo(() => {
		let classes = `${styles.alert__header} `;

		switch (type) {
			case AlertType.SUCCESS:
				return (classes += styles['alert__header--success']);
			case AlertType.ERROR:
				return (classes += styles['alert__header--error']);
		}
	}, [type]);

	if (!isAlertVisible) {
		return null;
	}

	return (
		<>
			<div className={styles.alert}>
				<div className={styles.alert__container}>
					<div className={headerClassNames}>{header}</div>
					<div className={styles.alert__content}>{content}</div>
					<div className={styles.alert__buttons}>
						<Button cta={t('Alert.Close')} onClick={closeAlert}></Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Alert;
