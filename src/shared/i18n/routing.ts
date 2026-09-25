import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en'],
  defaultLocale: 'en',
  // The default locale keeps clean URLs (/feed); others get a prefix (/ru/feed).
  localePrefix: 'as-needed',
});
