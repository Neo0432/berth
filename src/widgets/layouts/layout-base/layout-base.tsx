import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';

export interface LayoutBaseProps {
  className?: string;
  children: ReactNode;
}

export const LayoutBase: FC<LayoutBaseProps> = ({ className, children }) => {
  const { cnRoot } = getClasses({ className });
  return (
    <>
      <main className={cnRoot}>{children}</main>
    </>
  );
};
