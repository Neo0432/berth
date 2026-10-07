import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@features/switch-locale';

import { getClasses } from './styles/get-classes';

const CURRENT_YEAR = new Date().getFullYear();

export const FooterLegal = () => {
  const t = useTranslations('common.footer');
  const { cnRoot, cnInfo } = getClasses();

  return (
    <div className={cnRoot}>
      <div className={cnInfo}>
        <p>{t('copyright', { year: CURRENT_YEAR })}</p>
        <p>{t('disclaimer')}</p>
      </div>

      <LocaleSwitcher />
    </div>
  );
};
