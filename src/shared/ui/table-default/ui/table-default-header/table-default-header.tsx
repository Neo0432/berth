'use client';

import type { FC } from 'react';

import { TableBase, type TableHeaderProps } from '@shared/ui/table-base';

import { useTableContext } from '../../lib/table-hook';

export type TableDefaultHeaderProps = TableHeaderProps;

export const TableDefaultHeader: FC<TableDefaultHeaderProps> = (props) => {
  const table = useTableContext();

  return (
    <TableBase.Header {...props}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableBase.Row key={headerGroup.id}>
          {headerGroup.headers.map((header, headerIndex) => (
            <TableBase.HeaderCell key={header.id} cellIndex={headerIndex}>
              {!header.isPlaceholder && <table.FlexRender header={header} />}
            </TableBase.HeaderCell>
          ))}
        </TableBase.Row>
      ))}
    </TableBase.Header>
  );
};
