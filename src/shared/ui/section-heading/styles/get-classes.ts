import classNames from 'classnames/bind';

import type { SectionHeadingProps } from '../section-heading';

import styles from './section-heading.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<SectionHeadingProps, 'align' | 'className'>;

export const getClasses = ({ align, className }: Props) => {
  const cnRoot = cn('section-heading', `section-heading--${align}`, className);

  const cnTitle = cn('section-heading__title');

  return {
    cnRoot,
    cnTitle,
  };
};
