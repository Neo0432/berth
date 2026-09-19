import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

/**
 * Props of a polymorphic component: `<Button as="a" href="…" />`.
 *
 * In React 19 ref is an ordinary prop, so forwardRef and the whole PolymorphicRef
 * dance from older implementations are no longer needed.
 */
export type PolymorphicProps<Element extends ElementType, OwnProps = object> = OwnProps & {
  as?: Element;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<Element>, keyof OwnProps | 'as' | 'children'>;
