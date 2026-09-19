import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

/**
 * Single source of truth for aliases: read by Vite, Vitest and Sass alike.
 * tsconfig paths exist only for the IDE and tsc — keep both lists in sync.
 */
const alias = {
  '@app': resolvePath('./src/app'),
  '@pages': resolvePath('./src/pages'),
  '@widgets': resolvePath('./src/widgets'),
  '@features': resolvePath('./src/features'),
  '@entities': resolvePath('./src/entities'),
  '@shared': resolvePath('./src/shared'),
};

const STYLES_ROOT = resolvePath('./src/shared/assets/styles');

export default defineConfig({
  plugins: [react(), svgr()],

  resolve: { alias },

  css: {
    modules: {
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        /**
         * Inject mixins/functions into every scss file except the style
         * abstracts themselves — a repeated `@use ... as *` makes Sass throw.
         */
        additionalData: (source: string, filename: string) =>
          filename.startsWith(STYLES_ROOT) ? source : `@use '@shared/assets/styles/abstracts' as *;\n${source}`,
      },
    },
  },

  server: {
    port: 3000,
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/shared/test/setup.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.stories.tsx', 'src/**/index.ts', 'src/shared/test/**', 'src/**/*.d.ts'],
    },
  },
});
