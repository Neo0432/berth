'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';

import { type CellWidthComponentSettings, cellWidthStyle } from '../../lib/cell-width';
import { useTableStylesContext } from '../../lib/table-styles-context';

import { getClasses } from './styles/get-classes';

type RootComponentProps = ComponentPropsWithoutRef<'th'>;

interface ComponentProps {
  isNumeric?: boolean;
  isNoHyphens?: boolean;
  isAction?: boolean;
}

export type TableHeaderCellProps = RootComponentProps & ComponentProps & CellWidthComponentSettings;

export const TableHeaderCell: FC<TableHeaderCellProps> = ({
  className,
  style,
  cellWidth,
  cellIndex,
  isNumeric = false,
  isNoHyphens = false,
  isAction = false,
  ...props
}) => {
  const { cnRoot } = getClasses({ className, isNumeric, isNoHyphens, isAction });
  const { cellWidths } = useTableStylesContext();

  const widthStyle = cellWidthStyle(cellWidth ?? (cellIndex === undefined ? undefined : cellWidths[cellIndex]));

  return <th className={cnRoot} style={{ ...style, ...widthStyle }} {...props} />;
};
