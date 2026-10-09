'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';

import { type CellWidthComponentSettings, cellWidthStyle } from '../../lib/cell-width';
import { useTableStylesContext } from '../../lib/table-styles-context';

import { getClasses } from './styles/get-classes';

type RootComponentProps = ComponentPropsWithoutRef<'td'>;

export type TableBodyCellSize = 's' | 'm';

interface ComponentProps {
  isNumeric?: boolean;
  isNoHyphens?: boolean;
  isAction?: boolean;
  size?: TableBodyCellSize;
}

export type TableBodyCellProps = RootComponentProps & ComponentProps & CellWidthComponentSettings;

export const TableBodyCell: FC<TableBodyCellProps> = ({
  className,
  style,
  cellWidth,
  cellIndex,
  isNumeric = false,
  isNoHyphens = false,
  isAction = false,
  size = 'm',
  ...props
}) => {
  const { cnRoot } = getClasses({ className, isNumeric, isNoHyphens, isAction, size });
  const { cellWidths } = useTableStylesContext();

  const widthStyle = cellWidthStyle(cellWidth ?? (cellIndex === undefined ? undefined : cellWidths[cellIndex]));

  return <td className={cnRoot} style={{ ...style, ...widthStyle }} {...props} />;
};
