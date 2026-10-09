import { createPolymorphicComponent } from '@shared/helpers/create-polymorphic-component';
import { forwardRef, ForwardRefRenderFunction, JSX, PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ className?: string }>;

const DEFAULT_TAG: keyof JSX.IntrinsicElements = 'div';

const _PolymorphicBox: ForwardRefRenderFunction<HTMLDivElement, Props & { component: any }> = (
  { component, ...props },
  ref,
) => {
  const Element = component || DEFAULT_TAG;

  return <Element ref={ref} {...props} />;
};

export const PolymorphicBox = createPolymorphicComponent<typeof DEFAULT_TAG, Props>(forwardRef(_PolymorphicBox));
