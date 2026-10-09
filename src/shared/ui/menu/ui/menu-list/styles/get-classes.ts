import classNames from 'classnames/bind';

import { MenuListProps } from '../menu-list';
import classes from './menu-list.module.scss';

const cn = classNames.bind(classes);

type ClassesArgs = Pick<MenuListProps, 'className'>;

export const getClasses = ({ className }: ClassesArgs) => {
  const cnRoot = cn('menu-list', className);

  const cnListItems = cn('menu-list-items');

  return {
    cnRoot,
    cnListItems,
  };
};
