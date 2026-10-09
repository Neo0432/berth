'use client';

import { type Ref, useId } from 'react';
import { useTranslations } from 'next-intl';
import ReactSelect, {
  type GroupBase,
  mergeStyles,
  type Props as ReactSelectProps,
  type SelectInstance,
} from 'react-select';

import { FieldControl, type FieldControlProps, getFieldErrorId } from '@shared/ui/field-control';

import { MENU_MAX_HEIGHT } from './lib/constants';
import { getCustomStyles } from './styles/get-custom-styles';
import { ClearIndicator } from './ui/clear-indicator/clear-indicator';
import { DropdownIndicator } from './ui/dropdown-indicator/dropdown-indicator';
import { LoadingIndicator } from './ui/loading-indicator/loading-indicator';
import { MultiValueRemove } from './ui/multi-value-remove/multi-value-remove';
import { Option } from './ui/option/option';

const DEFAULT_COMPONENTS = {
  IndicatorSeparator: null,
  ClearIndicator,
  DropdownIndicator,
  LoadingIndicator,
  MultiValueRemove,
  Option,
};

type OwnFieldControlProps = Omit<FieldControlProps, 'htmlFor' | 'isDisabled' | 'children'>;

export type SelectProps<
  OptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<OptionType> = GroupBase<OptionType>,
> = Omit<
  ReactSelectProps<OptionType, IsMulti, Group>,
  'id' | 'className' | 'inputId' | 'required' | 'hideSelectedOptions'
> &
  OwnFieldControlProps & {
    id?: string;
    isInvalid?: boolean;
    ref?: Ref<SelectInstance<OptionType, IsMulti, Group>>;
  };

export const Select = <
  OptionType,
  IsMulti extends boolean = false,
  Group extends GroupBase<OptionType> = GroupBase<OptionType>,
>({
  // [field-control]
  className,
  label,
  isRequired,
  notifyBefore,
  notifyAfter,
  errorText,
  showErrorText = true,

  // [component]
  id,
  isInvalid: isInvalidProp,
  isDisabled,
  isMulti,
  styles,
  components,
  placeholder = '',
  isSearchable = false,
  closeMenuOnSelect = !isMulti,
  menuPlacement = 'auto',
  maxMenuHeight = MENU_MAX_HEIGHT,
  noOptionsMessage,
  loadingMessage,
  ...props
}: SelectProps<OptionType, IsMulti, Group>) => {
  const t = useTranslations('common.states');

  const generatedId = useId();
  const fieldId = id ?? generatedId;

  const isInvalid = isInvalidProp ?? Boolean(errorText);
  const isErrorShown = showErrorText && Boolean(errorText);

  return (
    <FieldControl
      className={className}
      htmlFor={fieldId}
      label={label}
      isRequired={isRequired}
      isDisabled={isDisabled}
      notifyBefore={notifyBefore}
      notifyAfter={notifyAfter}
      errorText={errorText}
      showErrorText={showErrorText}
    >
      <ReactSelect
        instanceId={generatedId}
        inputId={fieldId}
        isDisabled={isDisabled}
        isMulti={isMulti}
        styles={mergeStyles(getCustomStyles<OptionType, IsMulti, Group>({ isInvalid }), styles)}
        components={{ ...DEFAULT_COMPONENTS, ...components }}
        placeholder={placeholder}
        isSearchable={isSearchable}
        closeMenuOnSelect={closeMenuOnSelect}
        menuPlacement={menuPlacement}
        maxMenuHeight={maxMenuHeight}

        hideSelectedOptions={false}
        noOptionsMessage={noOptionsMessage ?? (() => t('noResults'))}
        loadingMessage={loadingMessage ?? (() => t('loading'))}

        required={isRequired}
        aria-invalid={isInvalid}
        aria-errormessage={isErrorShown ? getFieldErrorId(fieldId) : undefined}
        {...props}
      />
    </FieldControl>
  );
};
