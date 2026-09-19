import classNames from 'classnames/bind';

import type { SkeletonProps } from '../skeleton';

import styles from './skeleton.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<SkeletonProps, 'className' | 'shape'>;

export const getClasses = ({ className, shape }: Props) => {
  const cnRoot = cn('skeleton', `skeleton--${shape}`, className);

  return {
    cnRoot,
  };
};
