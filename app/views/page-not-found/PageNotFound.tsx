import { t } from 'i18next';
import { useNavigate } from 'react-router';

import heroImage from '~/assets/images/template/page404-image-background.webp';
import { ContentType } from '~/components/layout-elements/content/content.types';
import Layout from '~/components/layout-elements/layout/Layout';
import Button from '~/components/ui-elements/button/Button';
import { ButtonApperance } from '~/components/ui-elements/button/button.types';
import styles from '~/views/page-not-found/page-not-found.module.scss';

const PageNotFoundView = () => {
  const navigate = useNavigate();

  return (
    <>
      <Layout
        content={
          <div className={styles.pageNotFound}>
            <div className={styles.pageNotFound__description}>
              <h1 className={styles.pageNotFound__code}>{t('PageNotFoundView.code')}</h1>
              <h2>{t('PageNotFoundView.description')}</h2>
              <Button
                apperance={ButtonApperance.PRIMARY_SOLID}
                cta={t('PageNotFoundView.cta')}
                onClick={() => navigate('/')}
              />
            </div>
            <div className={styles['pageNotFound__hero']}>
              <img src={heroImage} className={styles['pageNotFound__hero-image']} alt="404" />
            </div>
          </div>
        }
        contentType={ContentType.FULLWIDTH}
      />
    </>
  );
};

export default PageNotFoundView;
