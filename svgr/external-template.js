/**
 * Template for third-party marks (GitHub, GitLab…): their colours are part of
 * the brand, so no `color` prop and no attribute replacement.
 */
const externalTemplate = ({ componentName, interfaces, jsx }, { tpl }) => {
  const componentNameWithType = `${componentName}: FC<SVGProps<SVGSVGElement>>`;

  return tpl`
    import { FC, SVGProps, useId } from 'react';

    ${interfaces};

    export const ${componentNameWithType} = (props) => {
      const id = useId();

      return ${jsx}
    };
  `;
};

export default externalTemplate;
