import type { RowData } from '@tanstack/react-table';

import { TableDefaultBody } from './ui/table-default-body/table-default-body';
import { TableDefaultHeader } from './ui/table-default-header/table-default-header';
import { TableDefaultRoot, type TableDefaultRootProps } from './ui/table-default-root/table-default-root';

export const TableDefault = <TData extends RowData>(props: TableDefaultRootProps<TData>) => (
  <TableDefaultRoot {...props} />
);

TableDefault.Header = TableDefaultHeader;
TableDefault.Body = TableDefaultBody;
