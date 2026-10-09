'use client';

import type { RowData, TableOptions } from '@tanstack/react-table';
import type { ReactNode } from 'react';

import { TableBase, type TableRootProps } from '@shared/ui/table-base';

import { type TableDefaultFeatures, useAppTable } from '../../lib/table-hook';

type TableComponents = Record<'Header' | 'Body', ReactNode>;

type TableDataOptions<TData extends RowData> = Pick<TableOptions<TableDefaultFeatures, TData>, 'columns' | 'data'>;

export type TableDefaultRootProps<TData extends RowData> = Omit<TableRootProps, 'children'> &
  TableDataOptions<TData> & {
    components: Partial<TableComponents>;
  };

export const TableDefaultRoot = <TData extends RowData>({
  columns,
  data,
  components,
  ...props
}: TableDefaultRootProps<TData>) => {
  const table = useAppTable({ columns, data });

  return (
    <table.AppTable>
      <TableBase {...props}>
        {components.Header}
        {components.Body}
      </TableBase>
    </table.AppTable>
  );
};
