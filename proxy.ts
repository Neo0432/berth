import createMiddleware from 'next-intl/middleware';

import { routing } from './src/shared/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip Next internals and anything with a file extension (favicon, fonts,
  // mockServiceWorker.js) — those must never be rewritten to a locale.
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
