/**
 * Every single-letter id an SVG can use internally (clipPath, mask, gradient…).
 * SVGO minifies ids down to these letters, so the same icon rendered twice would
 * produce duplicate ids in the DOM — see common-template.js for the fix.
 */
export const ID_ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
