import { ROUTES } from '@shared/config';

import type { FooterLinkGroup } from '../../../lib/types';

const SUPPORT_EMAIL = 'support@berth.example';

export const LINK_GROUPS: FooterLinkGroup[] = [
  {
    titleKey: 'product',
    links: [
      { labelKey: 'home', href: ROUTES.root },
      { labelKey: 'projects', href: ROUTES.projects },
      { labelKey: 'showcases', href: ROUTES.showcases },
      { labelKey: 'howItWorks', href: `${ROUTES.root}#how-it-works` },
    ],
  },
  {
    titleKey: 'legal',
    links: [
      { labelKey: 'terms', href: ROUTES.terms },
      { labelKey: 'privacy', href: ROUTES.privacy },
      { labelKey: 'guidelines', href: ROUTES.guidelines },
    ],
  },
  {
    titleKey: 'help',
    links: [
      { labelKey: 'contactSupport', href: `mailto:${SUPPORT_EMAIL}` },
      { labelKey: 'reportBug', href: `mailto:${SUPPORT_EMAIL}?subject=Bug%20report` },
    ],
  },
];
