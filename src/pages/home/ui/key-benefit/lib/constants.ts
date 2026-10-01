import type { CellWidth } from '@shared/ui/table-base';
import { createTableDefaultColumnHelper } from '@shared/ui/table-default';

export interface KeyBenefitRow {
  author: string;
  member: string;
}

export const KEY_BENEFIT_CELL_WIDTHS: CellWidth[] = [
  { min: '370px', max: '50%' },
  { min: '370px', max: '50%' },
];

export const keyBenefitColumnHelper = createTableDefaultColumnHelper<KeyBenefitRow>();
