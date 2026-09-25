import { useTranslations } from 'next-intl';

import { Button } from '@shared/ui';

import { getClasses } from './styles/get-classes';

export const HomePage = () => {
  const t = useTranslations('common');
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
