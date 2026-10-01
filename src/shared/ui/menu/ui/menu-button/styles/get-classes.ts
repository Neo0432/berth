import classNames from 'classnames/bind';

import styles from './menu-button.module.scss';
import type { MenuButtonProps } from '../menu-button';

const cn = classNames.bind(styles);

type Props = Pick<MenuButtonProps, 'className' | 'isSelected'>;

export const getClasses = ({ className, isSelected }: Props) => {
  const cnRoot = cn('button', { ['button--selected']: isSelected }, className);

  const cnText = cn('text');

  const cnSpinner = cn('button__spinner');

  return {
    cnRoot,
    cnText,
    cnSpinner,
  };
};
