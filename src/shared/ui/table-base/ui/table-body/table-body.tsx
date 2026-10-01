import type { ComponentPropsWithoutRef, FC } from 'react';

export type TableBodyProps = ComponentPropsWithoutRef<'tbody'>;

export const TableBody: FC<TableBodyProps> = (props) => <tbody {...props} />;
