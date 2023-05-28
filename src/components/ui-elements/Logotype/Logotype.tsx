import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './Logotype.module.scss';

const Logotype = (): ReactElement => {
	return (
		<Link to="/" className={styles.link}>
			{'Magda Chudzik'}
		</Link>
	);
};

export default Logotype;
