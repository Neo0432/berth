import externalTemplate from './external-template.js';
import { idNamespacePlugin } from './id-namespace-plugin.js';
import indexTemplate from './index-template.js';
import { svgoConfig } from './svgo.config.js';

/**
 * Config for third-party marks: `src/shared/assets/icons/svg/external`.
 * Colours are left exactly as the vendor shipped them.
 */
export default {
  template: externalTemplate,
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
