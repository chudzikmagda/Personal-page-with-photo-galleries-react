import React from 'react';
import { ReactElement } from 'react';
import Layout from '../../Layout/Layout';
import Card from '../../ui-elements/Card/Card';
import styles from './HomePage.module.scss';
import urbanPhoto from './../../../assets/images/galleries/categories/magda-chudzik-urban-photography.jpg';
import landscapePhoto from './../../../assets/images/galleries/categories/magda-chudzik-landscape-photography.jpg';
import { Paths } from '../../../routing/models/RoutingModels';

const HomePage: React.FC = (): ReactElement => {
	return (
		<Layout
			content={
				<div className={styles.homepage}>
					<Card bgImage={urbanPhoto} title="City" description="View the gallery" path={Paths.CITY} />
					<Card bgImage={landscapePhoto} title="Landscape" description="View the gallery" path={Paths.LANDSCAPE} />
				</div>
			}
		/>
	);
};

export default HomePage;
