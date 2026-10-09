import type { FC, ReactNode } from 'react';

import { getClasses } from './styles/get-classes';
import { Footer } from './ui/footer/footer';
import { Header } from './ui/header/header';

export interface LayoutBaseProps {
  children: ReactNode;
}

export const LayoutBase: FC<LayoutBaseProps> = ({ children }) => {
  const { cnRoot } = getClasses();
  return (
    <>
      <Header />
      <main className={cnRoot}>{children}</main>
      <Footer />
    </>
  );
};
