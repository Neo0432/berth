import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { getClasses } from './styles/get-classes';

type RootComponentProps = ComponentPropsWithoutRef<'li'>;

export interface MenuItemProps extends RootComponentProps {
  className?: string;
  children: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({ className, children, ...props }) => {
  const { cnRoot } = getClasses({ className });

  return (
    <li className={cnRoot} {...props}>
      {children}
    </li>
  );
};
