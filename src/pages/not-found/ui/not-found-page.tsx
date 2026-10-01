import { useTranslations } from 'next-intl';

import { ROUTES } from '@shared/config';
import { Link } from '@shared/i18n';
import { Button } from '@shared/ui';

import { getClasses } from './styles/get-classes';

export const NotFoundPage = () => {
  const t = useTranslations('common');
  const { cnRoot, cnTitle, cnDescription } = getClasses();

  return (
    <div className={cnRoot}>
      <h1 className={cnTitle}>{t('states.notFound.title')}</h1>
      <p className={cnDescription}>{t('states.notFound.description')}</p>

      <Button as={Link} href={ROUTES.home} variant="outline">
        {t('actions.goHome')}
      </Button>
    </div>
  );
};
