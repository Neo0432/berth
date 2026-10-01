import type common from './locales/en/common.json';
import type validation from './locales/en/validation.json';
import type homeLanding from './locales/en/home-landing.json';
import type { routing } from './routing';

/**
 * Gives t('states.error.title') autocompletion and turns a typo in a key
 * into a compile-time error.
 */
declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: {
      common: typeof common;
      validation: typeof validation;
      'home-landing': typeof homeLanding;
    };
  }
}
