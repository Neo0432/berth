import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';

import { SCSS_ADDITIONAL_DATA } from '../next.config.ts';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  // The Next framework resolves tsconfig paths for scripts, but not for Sass, and it
  // ignores sassOptions from next.config — both have to be handed to Vite directly.
  viteFinal: (viteConfig) =>
    mergeConfig(viteConfig, {
      resolve: {
        alias: { '@shared': fileURLToPath(new URL('../src/shared', import.meta.url)) },
      },
      css: {
        preprocessorOptions: {
          scss: { additionalData: SCSS_ADDITIONAL_DATA },
        },
      },
    }),
};

export default config;
