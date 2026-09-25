import type { Locale, Messages } from 'next-intl';

/**
 * A template-literal import cannot be typed by the compiler. The en/ files
 * define the Messages shape (see next-intl.d.ts); every other locale must
 * mirror them key for key.
 */
const loadNamespace = async <Namespace extends keyof Messages>(locale: Locale, namespace: Namespace) =>
  ((await import(`./locales/${locale}/${namespace}.json`)) as { default: Messages[Namespace] }).default;

/**
 * Adding a locale = a new folder under locales/ plus an entry in routing.ts.
 * Adding a namespace = a new JSON file plus one entry here.
 */
export const loadMessages = async (locale: Locale): Promise<Messages> => {
  const [common, validation] = await Promise.all([
    loadNamespace(locale, 'common'),
    loadNamespace(locale, 'validation'),
  ]);

  return { common, validation };
};
