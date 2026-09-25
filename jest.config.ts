import type { Config } from 'jest';
import nextJest from 'next/jest.js';

// Picks up next.config.ts and .env.test, transforms with SWC and stubs out
// CSS modules, images and next/font — the same pipeline the app builds with.
const createJestConfig = nextJest({ dir: './' });

const config: Config = {
  // Plain jsdom lacks fetch, Response and TextEncoder, which MSW 2 relies on.
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/shared/test/setup.ts'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  // Mirrors `paths` in tsconfig.json — next/jest does not read them on its own.
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/index.ts',
    '!src/**/*.d.ts',
    '!src/shared/test/**',
    '!src/shared/assets/icons/components/**',
  ],
};

/**
 * ESM-only packages that the CommonJS runtime of Jest cannot load as-is.
 * next/jest ignores all of node_modules, so these are let back in for SWC.
 */
const ESM_PACKAGES = [
  'rettime',
  'until-async',
  '@open-draft',
  'next-intl',
  'use-intl',
  'intl-messageformat',
  '@formatjs',
];

const jestConfig = async (): Promise<Config> => {
  const nextConfig = await createJestConfig(config)();

  return {
    ...nextConfig,
    transformIgnorePatterns: [`/node_modules/(?!(${ESM_PACKAGES.join('|')})/)`, '^.+\\.module\\.(css|sass|scss)$'],
  };
};

export default jestConfig;
