import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { DEFAULT_LOCALE, DEFAULT_NAMESPACE, resources, SUPPORTED_LOCALES } from './resources';

void i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LOCALE,
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: SUPPORTED_LOCALES,
  defaultNS: DEFAULT_NAMESPACE,
  interpolation: {
    // React escapes output on its own — no need to do it twice.
    escapeValue: false,
  },
  returnNull: false,
});

export { i18n };
