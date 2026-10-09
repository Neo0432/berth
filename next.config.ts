import path from 'node:path';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/**
 * Our own SCSS is resolved by Sass straight from disk instead of the bundler's
 * resolver: Turbopack on Windows fails on relative @use/@forward inside a file
 * it loaded itself (vercel/next.js#87243). So SCSS imports are written from
 * `src` (`shared/...`), not via the `@shared` alias.
 *
 * Resolved against cwd rather than import.meta: Next compiles this file to
 * CommonJS, and every script (next, storybook) runs from the project root.
 */
export const SCSS_LOAD_PATHS = [path.resolve('src')];

/**
 * Prepended to every stylesheet imported from code. Partials pulled in via @use
 * do not receive it, so the mixins never end up importing themselves.
 * Exported because Storybook does not read sassOptions and has to be fed the same value.
 */
export const SCSS_ADDITIONAL_DATA = `@use 'shared/assets/styles/mixins/mixins' as *;`;

const withNextIntl = createNextIntlPlugin('./src/shared/i18n/request.ts');

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
    loadPaths: SCSS_LOAD_PATHS,
    additionalData: SCSS_ADDITIONAL_DATA,
  },
};

export default withNextIntl(nextConfig);
