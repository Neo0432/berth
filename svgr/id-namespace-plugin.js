import { ID_ALPHABET } from './constants.js';

/**
 * Rewrites internal SVG ids to `${id}__a`, where `id` comes from React's useId().
 * Without it two instances of one icon share a clipPath id and the second one
 * renders blank — a bug that only shows up once an icon is used twice on a page.
 */
export const idNamespacePlugin = [
  '@svgr/babel-plugin-replace-jsx-attribute-value',
  {
    values: ID_ALPHABET.flatMap((symbol) => [
      { value: symbol, newValue: `\`\${id}__${symbol}\``, literal: true },
      { value: `url(#${symbol})`, newValue: `\`url(#\${id}__${symbol})\``, literal: true },
    ]),
  },
];
