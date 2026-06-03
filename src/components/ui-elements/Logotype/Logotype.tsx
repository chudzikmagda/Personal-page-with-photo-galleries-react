import React from 'react';
import { Link } from 'react-router-dom';

import styles from './logotype.module.scss';

const Logotype: React.FC = () => {
	return (
		<Link to="/" className={styles.link}>
			<span className={styles.primaryText}>Magda Chudzik</span>
			<span className={styles.secondaryText}>Fine Art Photographer</span>
		</Link>
	);
};

export default Logotype;
