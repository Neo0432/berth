import type { Resource, ResourceLanguage } from 'i18next';

export const DEFAULT_LOCALE = 'en';
export const DEFAULT_NAMESPACE = 'common';

/**
 * Locales are picked up automatically: drop in `locales/ru/common.json` and the
 * language exists. No manual registration, no component changes.
 */
const modules = import.meta.glob<ResourceLanguage>('./locales/*/*.json', {
  eager: true,
  import: 'default',
});

const LOCALE_FILE_PATTERN = /^\.\/locales\/([^/]+)\/([^/]+)\.json$/;

export const resources = Object.entries(modules).reduce<Resource>((accumulator, [path, translations]) => {
  const match = LOCALE_FILE_PATTERN.exec(path);

  if (!match) {
    return accumulator;
  }

  const [, locale, namespace] = match as unknown as [string, string, string];

  accumulator[locale] ??= {};
  accumulator[locale][namespace] = translations;

  return accumulator;
}, {});

export const SUPPORTED_LOCALES = Object.keys(resources);
