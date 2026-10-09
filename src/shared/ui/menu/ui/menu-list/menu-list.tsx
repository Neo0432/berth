import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { getClasses } from './styles/get-classes';

type RootComponentProps = ComponentPropsWithoutRef<'div'>;

export interface MenuListProps extends RootComponentProps {
  className?: string;
  children: ReactNode;
}

export const MenuList: FC<MenuListProps> = ({ className, children, ...props }) => {
  const { cnRoot, cnListItems } = getClasses({ className });

  return (
    <div className={cnRoot} {...props}>
      <ul className={cnListItems}>{children}</ul>
    </div>
  );
};
