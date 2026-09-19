import classNames from 'classnames/bind';

import type { ButtonOwnProps } from '../button';

import styles from './button.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<ButtonOwnProps, 'className' | 'isLoading' | 'isFullWidth' | 'variant' | 'size'>;

export const getClasses = ({ className, isLoading, isFullWidth, size, variant }: Props) => {
  const cnRoot = cn(
    'button',
    `button--${variant}`,
    `button--${size}`,
    { 'button--loading': isLoading, 'button--full-width': isFullWidth },
    className,
  );

  const cnContent = cn('button__content');

  const cnIcon = cn('button__icon');

  const cnSpinner = cn('button__spinner');

  return {
    cnRoot,
    cnContent,
    cnIcon,
    cnSpinner,
  };
};
