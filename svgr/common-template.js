/**
 * Template for the project's own icon set: the icon exposes a `color` prop and
 * inherits the surrounding text colour by default, so one file works on any
 * background instead of being duplicated per theme.
 *
 * `useId` is emitted unconditionally — icons without internal ids end up with an
 * unused variable, which is why the generated folder opts out of no-unused-vars
 * in eslint.config.js.
 */
const commonTemplate = ({ componentName, interfaces, jsx }, { tpl }) => {
  const componentNameWithType = `${componentName}: FC<SVGProps<SVGSVGElement>>`;

  return tpl`
    'use client';

    import { FC, SVGProps, useId } from 'react';

    ${interfaces};

    export const ${componentNameWithType} = ({ color = 'currentColor', ...props }) => {
      const id = useId();

      return ${jsx}
    };
  `;
};

export default commonTemplate;
