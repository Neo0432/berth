import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { ROUTES } from '@shared/config';
import { Button } from '@shared/ui';

import { getClasses } from './styles/get-classes';

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const { cnRoot, cnTitle, cnDescription } = getClasses();

  return (
    <main className={cnRoot}>
      <h1 className={cnTitle}>{t('states.notFound.title')}</h1>
      <p className={cnDescription}>{t('states.notFound.description')}</p>

      <Button as={Link} to={ROUTES.home} variant="secondary">
        {t('actions.goHome')}
      </Button>
    </main>
  );
};
