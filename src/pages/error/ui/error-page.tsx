'use client';

import { useTranslations } from 'next-intl';

import { Button } from '@shared/ui';

import { getClasses } from './styles/get-classes';

export const ErrorPage = () => {
  const t = useTranslations('common');
  const { cnRoot, cnTitle, cnDescription } = getClasses();

  return (
    <div className={cnRoot} role="alert">
      <h1 className={cnTitle}>{t('states.error.title')}</h1>
      <p className={cnDescription}>{t('states.error.description')}</p>

      <Button onClick={() => window.location.reload()}>{t('actions.retry')}</Button>
    </div>
  );
};
