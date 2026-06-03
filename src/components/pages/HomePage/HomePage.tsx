import React from 'react';
import { useTranslation } from 'react-i18next';

import { Paths } from '../../../routing/types/routing.types';
import AccordionCards from '../../layout-elements/AccordionCards/AccordionCards';
import { ContentType } from '../../layout-elements/Content/content.types';
import PageShell from '../../layout-elements/PageShell/PageShell';
import Card from '../../ui-elements/Card/Card';
import landscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-landscape-photography.webp';
import urbanPhoto from './../../../assets/images/galleries/categories/magda-chudzik-urban-photography.webp';

const HomePage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<PageShell
			title={t('HomePage.seo.title')}
			description={t('HomePage.seo.description')}
			keywords={t('HomePage.seo.keywords')}
			content={
				<AccordionCards>
					<Card bgImage={urbanPhoto} title={t('HomePage.cityTitle')} cta={t('HomePage.viewTheGallery')} path={Paths.CITY} />
					<Card bgImage={landscapePhoto} title={t('HomePage.landscapeTitle')} cta={t('HomePage.viewTheGallery')} path={Paths.LANDSCAPE} />
				</AccordionCards>
			}
			contentType={ContentType.FULLWIDTH}
		/>
	);
};

export default HomePage;
