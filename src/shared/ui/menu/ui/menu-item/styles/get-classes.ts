import classNames from 'classnames/bind';

import styles from './menu-item.module.scss';
import type { MenuItemProps } from '../menu-item';

const cn = classNames.bind(styles);

type Props = Pick<MenuItemProps, 'className'>;

export const getClasses = ({ className }: Props) => {
  const cnRoot = cn('menu-item', className);

  const cnButton = cn('menu-item__button');

  return {
    cnRoot,
    cnButton,
  };
};
