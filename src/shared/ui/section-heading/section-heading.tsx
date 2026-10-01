import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { Tag } from '@shared/ui/tag';

import { getClasses } from './styles/get-classes';

export type SectionHeadingAlign = 'center' | 'left';

type RootComponentProps = ComponentPropsWithoutRef<'div'>;

export interface SectionHeadingProps extends RootComponentProps {
  tag?: ReactNode;
  align?: SectionHeadingAlign;
  className?: string;
  children: ReactNode;
}

export const SectionHeading: FC<SectionHeadingProps> = ({ tag, align = 'center', className, children, ...props }) => {
  const { cnRoot, cnTitle } = getClasses({ align, className });

  return (
    <div className={cnRoot} {...props}>
      {tag && <Tag>{tag}</Tag>}
      <h2 className={cnTitle}>{children}</h2>
    </div>
  );
};
