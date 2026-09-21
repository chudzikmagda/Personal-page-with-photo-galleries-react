import type React from 'react';

import styles from './button.module.scss';
import type { ButtonProps } from './button.types';
import { ButtonApperance, ButtonType } from './button.types';

const Button: React.FC<ButtonProps> = ({
  apperance = ButtonApperance.PRIMARY_SOLID,
  cta,
  disabled = false,
  type = ButtonType.BUTTON,
  onClick,
}) => {
  let classNames: string = `${styles.btn} `;

  switch (apperance) {
    case ButtonApperance.PRIMARY_SOLID:
      classNames += styles['btn--primary-solid'];
      break;
    case ButtonApperance.SECONDARY_SOLID:
      classNames += styles['btn--secondary-solid'];
      break;
    case ButtonApperance.PRIMARY_OUTLINE:
      classNames += styles['btn--primary-outline'];
      break;
    case ButtonApperance.SECONDARY_OUTLINE:
      classNames += styles['btn--secondary-outline'];
      break;
    case ButtonApperance.TEXT:
      classNames += styles['btn--text'];
      break;
  }

  return (
    <button type={type} className={classNames} disabled={disabled} onClick={onClick}>
      {cta}
    </button>
  );
};

export default Button;
