/**
 * Template for multicolour artwork (brand marks, illustrations): the colours are
 * part of the image, so no `color` prop and no attribute replacement.
 */
const complexTemplate = ({ componentName, interfaces, jsx }, { tpl }) => {
  const componentNameWithType = `${componentName}: FC<SVGProps<SVGSVGElement>>`;

  return tpl`
    'use client';

    import { FC, SVGProps, useId } from 'react';

    ${interfaces};

    export const ${componentNameWithType} = (props) => {
      const id = useId();

      return ${jsx}
    };
  `;
};

export default complexTemplate;
