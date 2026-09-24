import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

export interface MenuItemProps extends Omit<HTMLButtonElement, 'className'> {
  className?: string;
  text: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({ className, text }) => {
  const { cnRoot, cnButton } = getClasses({ className });

  return (
    <li className={cnRoot}>
      <button className={cnButton}>{text}</button>
    </li>
  );
};
