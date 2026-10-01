// Source:
// https://github.com/mantinedev/mantine

import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  FunctionComponent,
  JSX,
  JSXElementConstructor,
  ReactElement,
} from 'react';

type ExtendedProps<Props = object, OverrideProps = object> = OverrideProps & Omit<Props, keyof OverrideProps>;

type ElementType = keyof JSX.IntrinsicElements | JSXElementConstructor<any>;

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>;

type ComponentProp<C> = { component?: C };

type InheritedProps<C extends ElementType, Props = object> = ExtendedProps<PropsOf<C>, Props>;

export type PolymorphicRef<C> = C extends ElementType ? ComponentPropsWithRef<C>['ref'] : never;

export type PolymorphicComponentProps<C, Props = object> = C extends ElementType
  ? InheritedProps<C, Props & ComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { component: ElementType };

export const createPolymorphicComponent = <ComponentDefaultType, Props, StaticComponents = Record<string, never>>(
  component: any,
) => {
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>;

  type _PolymorphicComponent = <C = ComponentDefaultType>(props: ComponentProps<C>) => ReactElement;

  type ComponentProperties = Omit<FunctionComponent<ComponentProps<any>>, never>;

  type PolymorphicComponent = _PolymorphicComponent & ComponentProperties & StaticComponents;

  return component as PolymorphicComponent;
};
