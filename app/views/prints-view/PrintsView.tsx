import type React from 'react';
import { useTranslation } from 'react-i18next';

import { ContentType } from '~/components/layout-elements/content/content.types';
import PageShell from '~/components/layout-elements/page-shell/PageShell';
import PrintItem from '~/views/prints-view/components/Print/Print';
import { printCollection } from '~/views/prints-view/components/Print/print.data';
import type { Print } from '~/views/prints-view/components/Print/print.types';
import styles from '~/views/prints-view/prints-view.module.scss';

const PrintsView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageShell
      content={
        <>
          <div className={styles['wrapper-s']}>
            <h1>{t('PrintsView.title')}</h1>
            <p>{t('PrintsView.longDescription')}</p>
            <h3>{t('PrintsView.shortDescription')}</h3>
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

export default PrintsView;
