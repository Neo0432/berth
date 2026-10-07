import type { ElementType, ReactNode } from 'react';

import type { PolymorphicProps } from '@shared/lib';
import { Spinner } from '@shared/ui/spinner';

import { getClasses } from './styles/get-classes';

export const BUTTON_VARIANTS = ['primary', 'outline', 'text', 'on-color'] as const;
export const BUTTON_SIZES = ['m', 's'] as const;

export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  className?: string;
}

export type ButtonProps<Element extends ElementType = 'button'> = PolymorphicProps<Element, ButtonOwnProps>;

export const Button = <Element extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'm',
  isLoading = false,
  isFullWidth = false,
  iconBefore,
  iconAfter,
  className,
  children,
  ...rest
}: ButtonProps<Element>) => {
  const { cnRoot, cnContent, cnIcon, cnSpinner } = getClasses({ className, isLoading, isFullWidth, size, variant });
  const Component = as ?? 'button';
  const isNativeButton = Component === 'button';

  const disabledProps = isNativeButton
    ? { disabled: isLoading || Boolean((rest as { disabled?: boolean }).disabled), type: 'button' as const }
    : { 'aria-disabled': isLoading || undefined };

  return (
    <Component className={cnRoot} aria-busy={isLoading || undefined} {...disabledProps} {...rest}>
      <span className={cnContent}>
        {iconBefore && <span className={cnIcon}>{iconBefore}</span>}
        {children}
        {iconAfter && <span className={cnIcon}>{iconAfter}</span>}
      </span>

      {isLoading && <Spinner size={size === 'm' ? 'm' : 's'} className={cnSpinner} />}
    </Component>
  );
};
