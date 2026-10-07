import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import { SvgMailEnvelope } from '@shared/assets/icons/components/common';
import { Link } from '@shared/i18n';

import type { FooterLinkGroup } from '../../lib/types';

import { getClasses } from './styles/get-classes';

interface LinkGroupProps {
  group: FooterLinkGroup;
}

export const LinkGroup: FC<LinkGroupProps> = ({ group }) => {
  const t = useTranslations('common.footer');
  const { cnRoot, cnTitle, cnLinks, cnLink } = getClasses();

  return (
    <div className={cnRoot}>
      <p className={cnTitle}>{t(`groups.${group.titleKey}`)}</p>

      <ul className={cnLinks}>
        {group.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={cnLink}>
              {t(`links.${link.labelKey}`)}
              {link.href.startsWith('mailto:') && (
                <SvgMailEnvelope width={16} height={16} color="var(--color-grayscale-30)" aria-hidden />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
