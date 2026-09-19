import type { Preview } from '@storybook/react-vite';
import { I18nextProvider } from 'react-i18next';

import { i18n } from '../src/shared/i18n';

import '../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'error' },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    ),
  ],
};

export default preview;
