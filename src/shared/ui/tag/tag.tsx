import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { getClasses } from './styles/get-classes';

export const TAG_VARIANTS = ['primary', 'secondary'] as const;

export type TagVariant = (typeof TAG_VARIANTS)[number];

type RootComponentProps = ComponentPropsWithoutRef<'span'>;

export interface TagProps extends RootComponentProps {
  variant?: TagVariant;
  className?: string;
  children: ReactNode;
}

export const Tag: FC<TagProps> = ({ variant = 'primary', className, children, ...props }) => {
  const { cnRoot } = getClasses({ variant, className });

  return (
    <span className={cnRoot} {...props}>
      {children}
    </span>
  );
};
