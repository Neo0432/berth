import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';

import { SCSS_ADDITIONAL_DATA, SCSS_LOAD_PATHS } from '../next.config.ts';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  // The Next framework ignores sassOptions from next.config, so the Sass setup has
  // to be handed to Vite directly.
  viteFinal: (viteConfig) =>
    mergeConfig(viteConfig, {
      css: {
        preprocessorOptions: {
          scss: { additionalData: SCSS_ADDITIONAL_DATA, loadPaths: SCSS_LOAD_PATHS },
        },
      },
    }),
};

export default config;
