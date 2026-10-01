import classNames from 'classnames/bind';

import type { TableHeaderCellProps } from '../table-header-cell';

import styles from './table-header-cell.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<TableHeaderCellProps, 'className' | 'isNumeric' | 'isNoHyphens' | 'isAction'>;

export const getClasses = ({ className, isNumeric, isNoHyphens, isAction }: Props) => {
  const cnRoot = cn(
    'table-header-cell',
    {
      'table-header-cell--numeric': isNumeric,
      'table-header-cell--no-hyphens': isNoHyphens,
      'table-header-cell--action': isAction,
    },
    className,
  );

  return {
    cnRoot,
  };
};
