import { useTranslation } from 'react-i18next';

import { Button } from '@shared/ui';

import { getClasses } from './styles/get-classes';

export const HomePage = () => {
  const { t } = useTranslation();
  const { cnRoot, cnTitle, cnTagline, cnActions } = getClasses();

  return (
    <main className={cnRoot}>
      <h1 className={cnTitle}>{t('app.name')}</h1>
      <p className={cnTagline}>{t('app.tagline')}</p>

      <div className={cnActions}>
        <Button>{t('actions.apply')}</Button>
        <Button variant="secondary">{t('actions.cancel')}</Button>
      </div>
    </main>
  );
};
