import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import { getClasses } from './styles/get-classes';

type RootComponentProps = ComponentPropsWithoutRef<'article'>;

export interface ShowcaseCardProps extends RootComponentProps {
  name: string;
  description: string;
  completedLabel: string;
  cover?: ReactNode;
  className?: string;
}

export const ShowcaseCard: FC<ShowcaseCardProps> = ({
  name,
  description,
  completedLabel,
  cover,
  className,
  ...props
}) => {
  const { cnRoot, cnCover, cnBody, cnName, cnDescription, cnCompleted } = getClasses({ className });

  return (
    <article className={cnRoot} {...props}>
      <div className={cnCover}>
        {cover}
        <p className={cnCompleted}>{completedLabel}</p>
      </div>

      <div className={cnBody}>
        <h3 className={cnName}>{name}</h3>
        <p className={cnDescription}>{description}</p>
      </div>
    </article>
  );
};
