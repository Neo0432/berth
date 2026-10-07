import { ROUTES } from '@shared/config';
import type { StaticPath } from '@shared/config/routes';

type HeaderRoute = {
  label: string;
  href: StaticPath;
  ariaLabel: string;
};
export const headerRoutes: Array<HeaderRoute> = [
  { label: 'Home', href: ROUTES.root, ariaLabel: 'Home page' },
  {
    label: 'Projects',
    href: ROUTES.projects,
    ariaLabel: 'Projects list page',
  },
  {
    label: 'Showcases',
    href: ROUTES.showcases,
    ariaLabel: 'Showcases page',
  },
];
