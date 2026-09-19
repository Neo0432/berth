/** SVGO options shared by both SVGR configs. */
export const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // viewBox is what makes an icon scalable — never strip it.
          removeViewBox: false,
          inlineStyles: { onlyMatchedOnce: false },
        },
      },
    },
    {
      // Minify internal ids to single letters; id-namespace-plugin then makes
      // them unique per React instance.
      name: 'cleanupIds',
      params: { remove: true, minify: true },
    },
  ],
};
