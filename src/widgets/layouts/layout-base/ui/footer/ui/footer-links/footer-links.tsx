import { useTranslations } from 'next-intl';

import { ROUTES } from '@shared/config';
import { Logo } from '@shared/ui/logo/logo';

import { LinkGroup } from '../link-group/link-group';

import { LINK_GROUPS } from './lib/constants';
import { getClasses } from './styles/get-classes';

export const FooterLinks = () => {
  const t = useTranslations('common.footer');
  const { cnRoot, cnLogoBlock, cnGroups } = getClasses();

  return (
    <div className={cnRoot}>
      <div className={cnLogoBlock}>
        <Logo href={ROUTES.root} variant="light" />
        <p>{t('tagline')}</p>
        <p>{t('noStrings')}</p>
      </div>

      <div className={cnGroups}>
        {LINK_GROUPS.map((group) => (
          <LinkGroup group={group} key={group.titleKey} />
        ))}
      </div>
    </div>
  );
};
