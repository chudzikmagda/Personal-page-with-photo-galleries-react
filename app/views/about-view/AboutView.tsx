import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { Link } from 'react-router';

import heroImage from '~/assets/images/template/photographer-magda-chudzik.webp';
import { ContentType } from '~/components/layout-elements/content/content.types';
import PageShell from '~/components/layout-elements/page-shell/PageShell';
import { SocialMediaMenuVariant } from '~/components/ui-elements/social-media-menu/social-media-menu.types';
import SocialMediaMenu from '~/components/ui-elements/social-media-menu/SocialMediaMenu';
import styles from '~/views/about-view/about-view.module.scss';

const AboutView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageShell
      content={
        <>
          <div className={styles.wrapper}>
            <img src={heroImage} className={styles['about-me__heroImage']} alt="Magda Chudzik" />
          </div>
          <div className={styles['wrapper-s']}>
            <h1>{t('AboutView.title')}</h1>
            <h4>
              <Trans
                t={t}
                i18nKey="AboutView.intro"
                components={{
                  strong: <strong />,
                  a: (
                    <a
                      href="https://dev.magdachudzik.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              />
            </h4>
            <p>
              <Trans
                t={t}
                i18nKey="AboutView.paragraph1"
                components={{
                  strong: <strong />,
                  a: <Link to="/landscape" />,
                  a2: <Link to="/landscape/black-and-white-landscape" />,
                }}
              />
            </p>
            <p>
              <Trans
                t={t}
                i18nKey="AboutView.paragraph2"
                components={{
                  strong: <strong />,
                }}
              />
            </p>
            <p>
              <Trans
                t={t}
                i18nKey="AboutView.paragraph3"
                components={{
                  strong: <strong />,
                  italic: <i />,
                }}
              />
            </p>
            <p>
              <Trans
                t={t}
                i18nKey="AboutView.paragraph4"
                components={{
                  strong: <strong />,
                }}
              />
            </p>
            <p>
              <Trans
                t={t}
                i18nKey="AboutView.paragraph5"
                components={{
                  strong: <strong />,
                }}
              />
            </p>
            <p>
              {`${t('AboutView.contact')} `}
              <SocialMediaMenu variant={SocialMediaMenuVariant.TEXT} />
            </p>
          </div>
        </>
      }
      contentType={ContentType.GRID}
    />
  );
};

export default AboutView;
