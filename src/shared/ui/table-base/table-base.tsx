import type { FC } from 'react';

import { TableBody } from './ui/table-body/table-body';
import { TableBodyCell } from './ui/table-body-cell/table-body-cell';
import { TableHeader } from './ui/table-header/table-header';
import { TableHeaderCell } from './ui/table-header-cell/table-header-cell';
import { TableRoot, type TableRootProps } from './ui/table-root/table-root';
import { TableRow } from './ui/table-row/table-row';

type ComponentsComposition = FC<TableRootProps> & {
  Header: typeof TableHeader;
  HeaderCell: typeof TableHeaderCell;
  Body: typeof TableBody;
  BodyCell: typeof TableBodyCell;
  Row: typeof TableRow;
};

export const TableBase: ComponentsComposition = (props) => <TableRoot {...props} />;

TableBase.Header = TableHeader;
TableBase.HeaderCell = TableHeaderCell;
TableBase.Body = TableBody;
TableBase.BodyCell = TableBodyCell;
TableBase.Row = TableRow;
