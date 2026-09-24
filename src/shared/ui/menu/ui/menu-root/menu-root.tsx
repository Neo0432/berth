import type { FC, PropsWithChildren, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

export interface MenuRootProps {
  className?: string;
  children: ReactNode;
}

export const MenuRoot: FC<MenuRootProps> = ({ className, children }) => {
  const { cnRoot } = getClasses({ className });

  return <ul className={cnRoot}>{children}</ul>;
};
