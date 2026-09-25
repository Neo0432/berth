import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/**
 * Prepended to every stylesheet imported from code. Partials pulled in via @use
 * do not receive it, so the mixins never end up importing themselves.
 * Exported because Storybook does not read sassOptions and has to be fed the same value.
 */
export const SCSS_ADDITIONAL_DATA = `@use '@shared/assets/styles/mixins/mixins' as *;`;

const withNextIntl = createNextIntlPlugin('./src/shared/i18n/request.ts');

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
    additionalData: SCSS_ADDITIONAL_DATA,
  },
};

export default withNextIntl(nextConfig);
