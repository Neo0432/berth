import type { Preview } from '@storybook/nextjs-vite';
import { NextIntlClientProvider } from 'next-intl';

import { montserrat } from '../src/app/fonts';
import common from '../src/shared/i18n/locales/en/common.json';
import validation from '../src/shared/i18n/locales/en/validation.json';
import { routing } from '../src/shared/i18n/routing';

import '../src/app/styles/index.scss';

// --font-family-base resolves var(--font-montserrat) on :root, so the class that
// defines it has to sit on <html> as well — the same place the app puts it.
document.documentElement.classList.add(montserrat.variable);

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'error' },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale={routing.defaultLocale} messages={{ common, validation }}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
