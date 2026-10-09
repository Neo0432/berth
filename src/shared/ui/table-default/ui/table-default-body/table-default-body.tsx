'use client';

import type { FC } from 'react';

import { TableBase, type TableBodyCellProps, type TableBodyProps } from '@shared/ui/table-base';

import { useTableContext } from '../../lib/table-hook';

export type TableDefaultBodyProps = TableBodyProps & Pick<TableBodyCellProps, 'size'>;

export const TableDefaultBody: FC<TableDefaultBodyProps> = ({ size, ...props }) => {
  const table = useTableContext();

  return (
    <TableBase.Body {...props}>
      {table.getRowModel().rows.map((row) => (
        <TableBase.Row key={row.id}>
          {row.getAllCells().map((cell, cellIndex) => (
            <TableBase.BodyCell key={cell.id} cellIndex={cellIndex} size={size}>
              <table.FlexRender cell={cell} />
            </TableBase.BodyCell>
          ))}
        </TableBase.Row>
      ))}
    </TableBase.Body>
  );
};
