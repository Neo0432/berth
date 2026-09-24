import classNames from 'classnames/bind';

import styles from './layout-base.module.scss';
import type { LayoutBaseProps } from '../layout-base';

const cn = classNames.bind(styles);

type Props = Pick<LayoutBaseProps, 'className'>;

export const getClasses = ({ className }: Props) => {
  const cnRoot = cn('root', className);

  return {
    cnRoot,
  };
};
