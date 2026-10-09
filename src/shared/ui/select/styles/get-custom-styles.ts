import type { GroupBase, StylesConfig } from 'react-select';

import { MENU_PADDING, OPTION_GAP, OPTION_HEIGHT } from '../lib/constants';

const TEXT_BODY_14 = { fontSize: '14px', lineHeight: '20px', fontWeight: 400 } as const;

interface Params {
  isInvalid: boolean;
}

export const getCustomStyles = <OptionType, IsMulti extends boolean, Group extends GroupBase<OptionType>>({
  isInvalid,
}: Params): StylesConfig<OptionType, IsMulti, Group> => ({
  container: (base) => ({
    ...base,
    ...TEXT_BODY_14,
  }),

  control: (base, { isFocused, isDisabled }) => ({
    ...base,
    minHeight: '44px',
    padding: '0 16px',
    borderColor: 'var(--color-grayscale-50)',
    borderRadius: 'var(--radius-xl)',
    boxShadow: 'none',
    backgroundColor: 'var(--color-grayscale-0)',
    cursor: 'pointer',
    transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',

    // - [hover]
    '&:hover': {
      borderColor: 'var(--color-grayscale-100)',
    },

    // - [focused]
    ...(isFocused && {
      borderColor: 'var(--color-primary-70)',
      boxShadow: '0 0 0 1px var(--color-primary-70)',
      '&:hover': {
        borderColor: 'var(--color-primary-70)',
      },
    }),

    // - [invalid]
    ...(isInvalid && {
      borderColor: 'var(--color-system-error-50)',
      boxShadow: isFocused ? '0 0 0 1px var(--color-system-error-50)' : 'none',
      '&:hover': {
        borderColor: 'var(--color-system-error-50)',
      },
    }),

    // - [disabled]
    ...(isDisabled && {
      borderColor: 'var(--color-grayscale-20)',
      backgroundColor: 'var(--color-grayscale-20)',
    }),
  }),

  valueContainer: (base) => ({
    ...base,
    gap: '4px',
    padding: '9px 8px 9px 0',
  }),

  placeholder: (base, { isDisabled }) => ({
    ...base,
    margin: 0,
    color: isDisabled ? 'var(--color-grayscale-30)' : 'var(--color-grayscale-50)',
  }),

  singleValue: (base, { isDisabled }) => ({
    ...base,
    margin: 0,
    color: isDisabled ? 'var(--color-grayscale-30)' : 'var(--color-grayscale-100)',
  }),

  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: 'var(--color-grayscale-100)',
  }),

  multiValue: (base) => ({
    ...base,
    alignItems: 'center',
    gap: '4px',
    margin: 0,
    padding: '2px 4px 2px 8px',
    borderRadius: 'var(--radius-xs)',
    backgroundColor: 'var(--color-grayscale-20)',
  }),

  multiValueLabel: (base) => ({
    ...base,
    padding: 0,
    paddingLeft: 0,
    fontSize: 'inherit',
    color: 'var(--color-grayscale-100)',
  }),

  multiValueRemove: (base, { isFocused }) => ({
    ...base,
    padding: 0,
    borderRadius: 'var(--radius-xs)',
    color: 'var(--color-grayscale-50)',
    backgroundColor: isFocused ? 'var(--color-grayscale-30)' : 'transparent',

    // - [hover]
    ':hover': {
      color: 'var(--color-grayscale-100)',
      backgroundColor: 'var(--color-grayscale-30)',
    },
  }),

  indicatorsContainer: (base) => ({
    ...base,
    gap: '8px',
  }),

  clearIndicator: (base) => ({
    ...base,
    padding: 0,
    color: 'var(--color-grayscale-50)',

    // - [hover]
    ':hover': {
      color: 'var(--color-grayscale-100)',
    },
  }),

  dropdownIndicator: (base, { isDisabled }) => {
    const color = isDisabled ? 'var(--color-grayscale-30)' : 'var(--color-grayscale-100)';

    return {
      ...base,
      padding: 0,
      color,

      // - [hover]:
      ':hover': { color },
    };
  },

  menu: (base) => ({
    ...base,
    overflow: 'hidden',
    border: '1px solid var(--color-grayscale-20)',
    borderRadius: 'var(--radius-lg)',
    boxShadow: 'var(--shadow-md)',
    backgroundColor: 'var(--color-grayscale-0)',
    zIndex: 'var(--index-dropdown)',
  }),

  menuPortal: (base) => ({
    ...base,
    ...TEXT_BODY_14,
    zIndex: 'var(--index-dropdown)',
  }),

  menuList: (base) => ({
    ...base,
    display: 'flex',
    flexDirection: 'column',
    gap: `${OPTION_GAP}px`,
    padding: `${MENU_PADDING}px`,
  }),

  option: (base, { isFocused, isSelected, isDisabled }) => ({
    ...base,
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: `${OPTION_HEIGHT}px`,
    padding: '10px 12px',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--color-grayscale-100)',
    backgroundColor: 'transparent',
    cursor: 'pointer',

    // - [active]
    ':active': {
      backgroundColor: 'var(--color-grayscale-20)',
    },

    // - [selected]
    ...(isSelected && {
      fontWeight: 500,
      backgroundColor: 'var(--color-grayscale-10)',
    }),

    // - [focused]
    ...(isFocused && {
      backgroundColor: 'var(--color-grayscale-20)',
    }),

    // - [disabled]
    ...(isDisabled && {
      color: 'var(--color-grayscale-30)',
      backgroundColor: 'transparent',
      cursor: 'not-allowed',
    }),
  }),

  noOptionsMessage: (base) => ({
    ...base,
    padding: '10px 12px',
    color: 'var(--color-grayscale-50)',
    textAlign: 'left',
  }),

  loadingMessage: (base) => ({
    ...base,
    padding: '10px 12px',
    color: 'var(--color-grayscale-50)',
    textAlign: 'left',
  }),
});
