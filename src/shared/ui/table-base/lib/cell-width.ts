import type { CSSProperties } from 'react';

export type CellWidth = Partial<
  | {
      min: string | number;
      max: string | number;
      fixed: never;
    }
  | {
      min: never;
      max: never;
      fixed: string | number;
    }
>;

// A cell takes its width either directly or by index from the widths set on the table root.
export type CellWidthComponentSettings = Partial<
  | {
      cellWidth: CellWidth;
      cellIndex: never;
    }
  | {
      cellWidth: never;
      cellIndex: number;
    }
>;

export const cellWidthStyle = (width?: CellWidth): CSSProperties => {
  if (width?.fixed) {
    return { minWidth: width.fixed, width: width.fixed };
  }

  if (width?.min || width?.max) {
    return { minWidth: width.min, width: width.max };
  }

  return {};
};
