import classNames from 'classnames/bind';

import type { TableBodyCellProps } from '../table-body-cell';

import styles from './table-body-cell.module.scss';

const cn = classNames.bind(styles);

type Props = Pick<TableBodyCellProps, 'className' | 'isNumeric' | 'isNoHyphens' | 'isAction' | 'size'>;

export const getClasses = ({ className, isNumeric, isNoHyphens, isAction, size }: Props) => {
  const cnRoot = cn(
    'table-body-cell',
    `table-body-cell--${size}`,
    {
      'table-body-cell--numeric': isNumeric,
      'table-body-cell--no-hyphens': isNoHyphens,
      'table-body-cell--action': isAction,
    },
    className,
  );

  return {
    cnRoot,
  };
};
