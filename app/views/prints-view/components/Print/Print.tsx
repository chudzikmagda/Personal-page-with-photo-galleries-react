import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '~/components/ui-elements/button/Button';
import { ButtonApperance } from '~/components/ui-elements/button/button.types';
import styles from '~/views/prints-view/components/Print/print.module.scss';
import type { Print } from '~/views/prints-view/components/Print/print.types';

const PrintItem: React.FC<Print> = ({ image, titleKey, cta }): ReactElement => {
  const { t } = useTranslation();

  const navigateToLink = (): void => {
    window.open(cta, '_blank');
  };

  return (
    <div className={styles.print}>
      <img
        src={image}
        className={styles.print__image}
        loading="lazy"
        alt={t(titleKey)}
        onClick={navigateToLink}
      />
      <div className={styles.print__description}>
        <h5 className={styles.print__title}>{t(titleKey)}</h5>
        <Button
          cta={t('PrintsView.cta')}
          apperance={ButtonApperance.PRIMARY_SOLID}
          onClick={navigateToLink}
        />
      </div>
    </div>
  );
};

export default PrintItem;
