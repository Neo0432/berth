import classNames from 'classnames/bind';

import type { ShowcaseCardProps } from '../showcase-card';

import styles from './showcase-card.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<ShowcaseCardProps, 'className'>;

export const getClasses = ({ className }: Props) => {
  const cnRoot = cn('showcase-card', className);

  const cnCover = cn('showcase-card__cover');

  const cnBody = cn('showcase-card__body');

  const cnName = cn('showcase-card__name');

  const cnDescription = cn('showcase-card__description');

  const cnCompleted = cn('showcase-card__completed');

  return {
    cnRoot,
    cnCover,
    cnBody,
    cnName,
    cnDescription,
    cnCompleted,
  };
};
