import { useTranslation } from 'react-i18next';

import { ButtonType } from '~/components/ui-elements/button/button.types';
import Button from '~/components/ui-elements/button/Button';
import Input from '~/components/ui-elements/form/input/Input';
import { InputType } from '~/components/ui-elements/form/input/input.types';
import type { PasswordFormProps } from './password-form.types';
import styles from './password-form.module.scss';

const PasswordForm: React.FC<PasswordFormProps> = ({
  translations,
  password,
  error,
  onSubmit,
  onPasswordChange,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.protectedRoute}>
      <div className={styles.protectedRoute__panel}>
        <h1 className={styles.protectedRoute__title}>{t(translations.titleKey)}</h1>
        <p className={styles.protectedRoute__description}>{t(translations.descriptionKey)}</p>

        <form className={styles.protectedRoute__form} onSubmit={onSubmit}>
          <Input
            id="passwordForm"
            label={t(translations.labelKey)}
            name="password"
            type={InputType.PASSWORD}
            autoComplete="current-password"
            value={password}
            error={error}
            onValueChange={onPasswordChange}
          />
          <div className={styles.protectedRoute__actions}>
            <Button cta={t(translations.submitCtaKey)} type={ButtonType.SUBMIT} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;
