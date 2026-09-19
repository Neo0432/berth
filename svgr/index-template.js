import path from 'node:path';

const toPascalCase = (value) =>
  value.replace(/[-_ ]+(\w)/g, (_, char) => char.toUpperCase()).replace(/^\w/, (char) => char.toUpperCase());

/** Generates the barrel file: `export { SvgClose } from './close';` */
const indexTemplate = (filePaths) =>
  filePaths
    .map(({ originalPath }) => {
      const basename = path.basename(originalPath, path.extname(originalPath));

      return `export { Svg${toPascalCase(basename)} } from './${basename}';`;
    })
    .join('\n');

export default indexTemplate;
