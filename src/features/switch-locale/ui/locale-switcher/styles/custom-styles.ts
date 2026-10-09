import type { Locale } from 'next-intl';
import type { StylesConfig } from 'react-select';

import type { SelectOption } from '@shared/types';

/**
 * Laid over the shared Select styles (react-select merges them): only the control
 * changes for the dark background, the menu stays the regular light one.
 */
export const CUSTOM_STYLES: StylesConfig<SelectOption<Locale>, false> = {
  control: (base, { isFocused }) => ({
    ...base,
    backgroundColor: 'transparent',

    // - [default / hover]: the focused state keeps the shared orange ring
    ...(!isFocused && {
      borderColor: 'var(--color-grayscale-50)',
      '&:hover': {
        borderColor: 'var(--color-grayscale-30)',
      },
    }),
  }),

  valueContainer: (base) => ({
    ...base,
    padding: '9px 12px 9px 0',
  }),

  singleValue: (base) => ({
    ...base,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 500,
    color: 'var(--color-grayscale-0)',
  }),

  // Spinner and chevron take currentColor
  indicatorsContainer: (base) => ({
    ...base,
    color: 'var(--color-grayscale-0)',
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: 'inherit',
    ':hover': {
      color: 'inherit',
    },
  }),
};
