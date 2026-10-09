'use client';

import {
  type FieldPath,
  type FieldPathValue,
  type FieldValues,
  useController,
  type UseControllerProps,
} from 'react-hook-form';
import type { MultiValue, SingleValue } from 'react-select';

import type { SelectOption } from '@shared/types';

import { Select, type SelectProps } from './select';

type FormValue<Value, IsMulti extends boolean> = IsMulti extends true ? Value[] : Value | null;

type FieldPathAccepting<Values extends FieldValues, Stored> = {
  [Path in FieldPath<Values>]: [Stored] extends [FieldPathValue<Values, Path>] ? Path : never;
}[FieldPath<Values>];

type ControlledProps =
  | 'name'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'onBlur'
  | 'isDisabled'
  | 'isInvalid'
  | 'errorText'
  | 'ref'
  | 'options';

export type SelectFieldProps<
  Values extends FieldValues,
  Value extends string | number,
  IsMulti extends boolean = false,
  Name extends FieldPathAccepting<Values, FormValue<Value, IsMulti>> = FieldPathAccepting<
    Values,
    FormValue<Value, IsMulti>
  >,
> = UseControllerProps<Values, Name> &
  Omit<SelectProps<SelectOption<Value>, IsMulti>, ControlledProps> & {
    options: readonly SelectOption<Value>[];
  };

const isMultiValue = <OptionType,>(
  value: MultiValue<OptionType> | SingleValue<OptionType>,
): value is MultiValue<OptionType> => Array.isArray(value);

export const SelectField = <
  Values extends FieldValues,
  Value extends string | number,
  IsMulti extends boolean = false,
  Name extends FieldPathAccepting<Values, FormValue<Value, IsMulti>> = FieldPathAccepting<
    Values,
    FormValue<Value, IsMulti>
  >,
>({
  control,
  name,
  rules,
  defaultValue,
  shouldUnregister,
  disabled,
  options,
  ...props
}: SelectFieldProps<Values, Value, IsMulti, Name>) => {
  const {
    field: { ref, value: fieldValue, onChange, onBlur, disabled: isFieldDisabled },
    fieldState: { invalid, error },
  } = useController({ control, name, rules, defaultValue, shouldUnregister, disabled });

  const value = fieldValue as Value[] | Value | null | undefined;

  const optionsByValue = new Map(options.map((option) => [option.value, option]));
  const toOption = (optionValue: Value) =>
    optionsByValue.get(optionValue) ?? { label: String(optionValue), value: optionValue };

  const selected = Array.isArray(value) ? value.map(toOption) : value == null ? null : toOption(value);

  const handleChange = (newValue: MultiValue<SelectOption<Value>> | SingleValue<SelectOption<Value>>) => {
    onChange(isMultiValue(newValue) ? newValue.map((option) => option.value) : (newValue?.value ?? null));
  };

  return (
    <Select
      {...props}
      ref={ref}
      name={name}
      options={options}
      value={selected}
      onChange={handleChange}
      onBlur={onBlur}
      isDisabled={isFieldDisabled}
      isInvalid={invalid}
      errorText={error?.message}
    />
  );
};
