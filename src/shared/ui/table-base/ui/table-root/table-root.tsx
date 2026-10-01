'use client';

import { type ComponentPropsWithoutRef, type FC, useRef } from 'react';

import type { CellWidth } from '../../lib/cell-width';
import { TableStylesContext } from '../../lib/table-styles-context';
import { useRightOverflowFade } from '../../lib/use-right-overflow-fade';

import { getClasses } from './styles/get-classes';

type RootComponentProps = ComponentPropsWithoutRef<'table'>;

export interface TableRootProps extends RootComponentProps {
  cellWidths?: CellWidth[];
}

const EMPTY_CELL_WIDTHS: CellWidth[] = [];

export const TableRoot: FC<TableRootProps> = ({ className, cellWidths = EMPTY_CELL_WIDTHS, children, ...props }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  const hasRightOverflow = useRightOverflowFade(scrollRef, tableRef);
  const { cnRoot, cnScroll, cnTable } = getClasses({ className, hasRightOverflow });

  return (
    <TableStylesContext value={{ cellWidths }}>
      <div className={cnRoot}>
        <div ref={scrollRef} className={cnScroll}>
          <table ref={tableRef} className={cnTable} {...props}>
            {children}
          </table>
        </div>
      </div>
    </TableStylesContext>
  );
};
