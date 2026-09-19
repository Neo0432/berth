import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import boundaries from 'eslint-plugin-boundaries';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** FSD layers, bottom-up. Order matters for both boundaries and import sorting. */
const LAYERS = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];

/** Layers split into slices: only index.ts is exposed to the outside. */
const SLICED_LAYERS = ['entities', 'features', 'widgets', 'pages'];

/**
 * A layer may only depend on layers strictly below it.
 * `shared` and `app` additionally allow imports within themselves —
 * every other layer cannot see its siblings on the same level.
 */
const layerPolicies = LAYERS.map((layer, index) => {
  const allowedTypes = layer === 'shared' || layer === 'app' ? LAYERS.slice(0, index + 1) : LAYERS.slice(0, index);

  return {
    from: { element: { type: layer } },
    allow: { to: { element: { types: { anyOf: allowedTypes } } } },
  };
});

/** Reaching into another slice past its public API is forbidden. */
const entryPointPolicy = {
  disallow: {
    to: {
      element: { types: { anyOf: SLICED_LAYERS }, fileInternalPath: '!index.ts' },
    },
  },
};

export default defineConfig([
  globalIgnores(['dist', 'coverage', 'storybook-static', 'node_modules', 'public/mockServiceWorker.js']),

  // ───────────────────────── Base for every TS/TSX file ─────────────────────────
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      // --- Imports ---
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'], // side-effect imports
            ['^node:', '^react$', '^react-dom', '^@?\\w'], // external packages
            ['^@app(/.*)?$'],
            ['^@pages(/.*)?$'],
            ['^@widgets(/.*)?$'],
            ['^@features(/.*)?$'],
            ['^@entities(/.*)?$'],
            ['^@shared(/.*)?$'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // up the tree
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // siblings
            ['^.+\\.s?css$'], // styles last
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-import-type-side-effects': 'error',

      // --- Types ---
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // --- Async: where 80% of real bugs live ---
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }, // onClick={async () => …} is fine
      ],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],

      // --- React ---
      'react-hooks/exhaustive-deps': 'error',

      // --- General hygiene ---
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'prefer-const': 'error',
      'no-param-reassign': 'error',
      'object-shorthand': ['error', 'always'],
    },
  },

  // ───────────────────────── FSD layer boundaries ─────────────────────────
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { boundaries },
    settings: {
      'boundaries/include': ['src/**/*'],
      // The pattern describes the element ROOT; everything inside belongs to it.
      // A pattern like 'src/pages/*/**/*' matches no element at all, and the
      // rule then silently lets every violation through.
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app' },
        { type: 'pages', pattern: 'src/pages/*', capture: ['slice'] },
        { type: 'widgets', pattern: 'src/widgets/*', capture: ['slice'] },
        { type: 'features', pattern: 'src/features/*', capture: ['slice'] },
        { type: 'entities', pattern: 'src/entities/*', capture: ['slice'] },
        { type: 'shared', pattern: 'src/shared' },
      ],
      'import/resolver': {
        typescript: { project: './tsconfig.json' },
      },
    },
    rules: {
      'boundaries/dependencies': ['error', { default: 'disallow', policies: [...layerPolicies, entryPointPolicy] }],
    },
  },

  // ───────────────────────── Application entry points ─────────────────────────
  {
    files: ['src/app/**/*.{ts,tsx}', 'src/**/*.stories.tsx'],
    extends: [reactRefresh.configs.vite],
  },

  // ───────────────────────── Tests ─────────────────────────
  {
    files: ['src/**/*.{test,spec}.{ts,tsx}', 'src/shared/test/**/*.{ts,tsx}'],
    extends: [vitest.configs.recommended, testingLibrary.configs['flat/react']],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      'vitest/expect-expect': 'error',
      'vitest/no-focused-tests': 'error',
    },
  },

  // ───────────────────────── Generated icon components ─────────────────────────
  {
    files: ['src/shared/assets/icons/components/**/*.tsx'],
    rules: {
      // The svgr template always emits `const id = useId()`, including for icons
      // that have no internal ids to namespace. Generated output — not worth policing.
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // ───────────────────────── Storybook ─────────────────────────
  {
    files: ['src/**/*.stories.tsx', '.storybook/**/*.{ts,tsx}'],
    extends: [storybook.configs['flat/recommended']],
  },

  // ───────────────────────── Root-level config files ─────────────────────────
  {
    files: ['*.{js,ts}', '.storybook/**/*.{ts,tsx}'],
    languageOptions: { globals: globals.node },
    rules: {
      'boundaries/dependencies': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
    },
  },

  // Prettier turns off every stylistic rule — must stay last
  prettier,
]);
