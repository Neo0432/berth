import classNames from 'classnames/bind';

import type { TagProps } from '../tag';

import styles from './tag.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<TagProps, 'variant' | 'className'>;

export const getClasses = ({ variant, className }: Props) => {
  const cnRoot = cn('tag', `tag--${variant}`, className);

  return {
    cnRoot,
  };
};
