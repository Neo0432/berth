import { createBrowserRouter } from 'react-router';

import { ROUTES } from '@shared/config';

/**
 * Pages load lazily: someone browsing the feed does not need the workspace code.
 * The data router's `lazy` expects an object with a `Component` key.
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    lazy: async () => {
      const { HomePage } = await import('@pages/home');

      return { Component: HomePage };
    },
  },
  {
    path: ROUTES.notFound,
    lazy: async () => {
      const { NotFoundPage } = await import('@pages/not-found');

      return { Component: NotFoundPage };
    },
  },
]);
