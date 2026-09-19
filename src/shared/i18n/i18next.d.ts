import type common from './locales/en/common.json';
import type validation from './locales/en/validation.json';

/**
 * This gives t('states.error.title') autocompletion and turns a typo
 * in a key into a compile-time error.
 */
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      validation: typeof validation;
    };
    returnNull: false;
  }
}
