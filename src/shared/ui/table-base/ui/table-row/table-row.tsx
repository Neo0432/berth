import type { ComponentPropsWithoutRef, FC } from 'react';

export type TableRowProps = ComponentPropsWithoutRef<'tr'>;

export const TableRow: FC<TableRowProps> = (props) => <tr {...props} />;
