import { useTranslation } from 'react-i18next';

import { Button } from '@shared/ui';

import { getClasses } from './styles/get-classes';

export const AppErrorFallback = () => {
  const { t } = useTranslation();
  const { cnRoot, cnTitle, cnDescription } = getClasses();

  return (
    <div className={cnRoot} role="alert">
      <h1 className={cnTitle}>{t('states.error.title')}</h1>
      <p className={cnDescription}>{t('states.error.description')}</p>

      <Button onClick={() => window.location.reload()}>{t('actions.retry')}</Button>
    </div>
  );
};
