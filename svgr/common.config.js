import commonTemplate from './common-template.js';
import { idNamespacePlugin } from './id-namespace-plugin.js';
import indexTemplate from './index-template.js';
import { svgoConfig } from './svgo.config.js';

/**
 * Config for the project's own icons: `src/shared/assets/icons/svg/common`.
 *
 * Any hardcoded colour listed below is replaced with the `color` prop, so the
 * icon follows the design tokens instead of whatever Figma exported.
 * Extend the map when a new export brings in a colour that is not here yet.
 */
export default {
  template: commonTemplate,
  indexTemplate,
  filenameCase: 'kebab',
  typescript: true,
  prettier: true,
  jsxRuntime: 'automatic',
  ignoreExisting: false,
  icon: '24px',
  svgoConfig,
  replaceAttrValues: {
    '#000': '{color}',
    '#000000': '{color}',
    black: '{color}',
    currentColor: '{color}',
    '#141821': '{color}',
    '#6B7488': '{color}',
    '#97A0B2': '{color}',
    '#2B2B2B': '{color}',
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
  jsx: {
    babelConfig: {
      plugins: [idNamespacePlugin],
    },
  },
};
