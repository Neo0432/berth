import classNames from 'classnames/bind';

import type { TableRootProps } from '../table-root';

import styles from './table-root.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<TableRootProps, 'className'> & {
  hasRightOverflow: boolean;
};

export const getClasses = ({ className, hasRightOverflow }: Props) => {
  const cnRoot = cn('table-root', { 'table-root--with-fade': hasRightOverflow }, className);

  const cnScroll = cn('table-root__scroll');

  const cnTable = cn('table-root__table');

  return {
    cnRoot,
    cnScroll,
    cnTable,
  };
};
