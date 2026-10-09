/* eslint-disable react/button-has-type */

import { getClasses } from './styles/get-classes';
import type { ElementType } from 'react';
import { PolymorphicProps } from '@shared/lib';
import { Spinner } from '@shared/ui/spinner';

export interface MenuButtonOwnProps {
  className?: string;
  isSelected?: boolean;
  isLoading?: boolean;
}

export type MenuButtonProps<Element extends ElementType = 'button'> = PolymorphicProps<Element, MenuButtonOwnProps>;

export const MenuButton = <Element extends ElementType = 'button'>({
  as,
  className,
  isLoading,
  isSelected = false,
  children,
  ...rest
}: MenuButtonProps<Element>) => {
  const { cnRoot, cnText, cnSpinner } = getClasses({ className, isSelected });

  const Component = as ?? 'button';
  const isNativeButton = Component === 'button';

  // <a> has no disabled attribute, so non-buttons get aria-disabled instead.
  const disabledProps = isNativeButton
    ? { disabled: isLoading || Boolean((rest as { disabled?: boolean }).disabled), type: 'button' as const }
    : { 'aria-disabled': isLoading || undefined };

  return (
    <Component className={cnRoot} aria-busy={isLoading || undefined} {...disabledProps} {...rest}>
      <span className={cnText}>{children}</span>

      {isLoading && <Spinner size={'s'} className={cnSpinner} />}
    </Component>
  );
};
