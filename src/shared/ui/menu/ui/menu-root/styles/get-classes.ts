import classNames from 'classnames/bind';

import styles from './menu-root.module.scss';
import type { MenuRootProps } from '../menu-root';

const cn = classNames.bind(styles);

type Props = Pick<MenuRootProps, 'className'>;

export const getClasses = ({ className }: Props) => {
  const cnRoot = cn('menu-root', className);

  return {
    cnRoot,
  };
};
