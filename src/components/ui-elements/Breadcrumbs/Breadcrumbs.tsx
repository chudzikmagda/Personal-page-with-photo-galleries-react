import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import { BreadcrumbsProps } from './models/breadcrumbs.models';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
	const isLastItem: (index: number) => boolean = (index: number) => index === items.length - 1;

	return (
		<nav aria-label="breadcrumb" className={styles.breadcrumbs}>
			<ol className={styles['breadcrumbs-list']}>
				{items.map((item, index) => {
					return (
						<li key={item.path} className={styles['breadcrumbs-item']}>
							{index > 0 && <span className={styles['breadcrumbs-separator']}>&#x203A;</span>}
							{isLastItem(index) ? (
								<span aria-current="page" className={styles['breadcrumbs-current']}>
									{item.label}
								</span>
							) : (
								<Link to={item.path}>{item.label}</Link>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
