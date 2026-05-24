import React from 'react';
import { useTranslation } from 'react-i18next';

import { Paths } from '../../../routing/types/routing.types';
import { ContentType } from '../../layout-elements/Content/content.types';
import PageShell from '../../layout-elements/PageShell/PageShell';
import Card from '../../ui-elements/Card/Card';
import bwLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-bw-landscape-photography.webp';
import colorLandscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-color-landscape-photography.webp';
import styles from './LandscapePage.module.scss';

const LandscapePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<PageShell
			title={t('LandscapePage.seo.title')}
			description={t('LandscapePage.seo.description')}
			keywords={t('LandscapePage.seo.keywords')}
			content={
				<div className={styles.landscape}>
					<Card
						bgImage={bwLandscapePhoto}
						title={t('LandscapePage.bwLandscape')}
						description={t('LandscapePage.viewTheGallery')}
						path={Paths.BW_LANDSCAPE}
					/>
					<Card
						bgImage={colorLandscapePhoto}
						title={t('LandscapePage.colorLandscape')}
						description={t('LandscapePage.viewTheGallery')}
						path={Paths.COLOR_LANDSCAPE}
					/>
				</div>
			}
			contentType={ContentType.FULLWIDTH}
		/>
	);
};

export default LandscapePage;
