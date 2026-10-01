'use client';

import { createContext, useContext } from 'react';

import type { CellWidth } from './cell-width';

export interface TableStylesContextValue {
  cellWidths: CellWidth[];
}

export const TableStylesContext = createContext<TableStylesContextValue>({ cellWidths: [] });

export const useTableStylesContext = () => useContext(TableStylesContext);
