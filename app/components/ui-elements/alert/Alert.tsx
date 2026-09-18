import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '~/components/ui-elements/button/Button';
import styles from './alert.module.scss';
import type { AlertProps } from './alert.types';
import { AlertType } from './alert.types';

const Alert: React.FC<AlertProps> = ({ content, header, type, closeAlert }) => {
  const { t } = useTranslation();

  let headerClassNames: string = `${styles.alert__header} `;

  switch (type) {
    case AlertType.SUCCESS:
      headerClassNames += styles['alert__header--success'];
      break;
    case AlertType.ERROR:
      headerClassNames += styles['alert__header--error'];
      break;
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
