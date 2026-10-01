import type { ElementType } from 'react';

import type { PolymorphicProps } from '@shared/lib';

import { getClasses } from './styles/get-classes';

export interface GradientPanelOwnProps {
  className?: string;
}

export type GradientPanelProps<Element extends ElementType = 'div'> = PolymorphicProps<Element, GradientPanelOwnProps>;

export const GradientPanel = <Element extends ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: GradientPanelProps<Element>) => {
  const { cnRoot } = getClasses({ className });
  const Component = as ?? 'div';

  return (
    <Component className={cnRoot} {...rest}>
      {children}
    </Component>
  );
};
