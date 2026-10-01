import complexTemplate from './complex-template.js';
import { idNamespacePlugin } from './id-namespace-plugin.js';
import indexTemplate from './index-template.js';
import { svgoConfig } from './svgo.config.js';

/**
 * Config for multicolour artwork: `src/shared/assets/icons/svg/complex`.
 * Colours are left exactly as they were exported.
 */
export default {
  template: complexTemplate,
  indexTemplate,
  filenameCase: 'kebab',
  typescript: true,
  prettier: true,
  jsxRuntime: 'automatic',
  ignoreExisting: false,
  svgoConfig,
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  jsx: {
    babelConfig: {
      plugins: [idNamespacePlugin],
    },
  },
};
