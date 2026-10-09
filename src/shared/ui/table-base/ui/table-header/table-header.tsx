import type { ComponentPropsWithoutRef, FC } from 'react';

export type TableHeaderProps = ComponentPropsWithoutRef<'thead'>;

export const TableHeader: FC<TableHeaderProps> = (props) => <thead {...props} />;
