import styles from './accordion-cards.module.scss';
import type { AccordionCardsProps } from './accordion-cards.types';

const AccordionCards: React.FC<AccordionCardsProps> = ({ children }) => {
  return <div className={styles.accordionCards}>{children}</div>;
};

export default AccordionCards;
