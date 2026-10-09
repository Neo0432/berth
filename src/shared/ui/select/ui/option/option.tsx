import { components, type GroupBase, type OptionProps } from 'react-select';

import { SvgCheck } from '@shared/assets/icons/components/common';

export const Option = <OptionType, IsMulti extends boolean, Group extends GroupBase<OptionType>>({
  children,
  ...props
}: OptionProps<OptionType, IsMulti, Group>) => (
  <components.Option {...props}>
    {children}
    {props.isSelected && <SvgCheck width={20} height={20} aria-hidden />}
  </components.Option>
);
