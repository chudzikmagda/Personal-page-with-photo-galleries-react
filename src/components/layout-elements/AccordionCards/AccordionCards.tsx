import React from 'react';

import styles from './accordionCards.module.scss';
import { AccordionCardsProps } from './accordionCards.types';

const AccordionCards: React.FC<AccordionCardsProps> = ({ children }) => {
	return <div className={styles.accordionCards}>{children}</div>;
};

export default AccordionCards;
