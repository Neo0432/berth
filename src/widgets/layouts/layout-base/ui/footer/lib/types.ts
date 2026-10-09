import type { Messages } from 'next-intl';

import type { StaticPath } from '@shared/config/routes';

type FooterMessages = Messages['common']['footer'];

interface FooterLink {
  labelKey: keyof FooterMessages['links'];
  href: StaticPath | `${StaticPath}#${string}` | `mailto:${string}`;
}

export interface FooterLinkGroup {
  titleKey: keyof FooterMessages['groups'];
  links: FooterLink[];
}
