import { createTableHook, tableFeatures } from '@tanstack/react-table';

const features = tableFeatures({});

export type TableDefaultFeatures = typeof features;

export const { createAppColumnHelper, useAppTable, useTableContext } = createTableHook({ features });
