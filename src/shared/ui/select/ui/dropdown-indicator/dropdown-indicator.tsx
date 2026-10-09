import { components, type DropdownIndicatorProps, type GroupBase } from 'react-select';

import { SvgChevronDown, SvgChevronUp } from '@shared/assets/icons/components/common';

export const DropdownIndicator = <OptionType, IsMulti extends boolean, Group extends GroupBase<OptionType>>(
  props: DropdownIndicatorProps<OptionType, IsMulti, Group>,
) => {
  const Chevron = props.selectProps.menuIsOpen ? SvgChevronUp : SvgChevronDown;

  return (
    <components.DropdownIndicator {...props}>
      <Chevron width={20} height={20} aria-hidden />
    </components.DropdownIndicator>
  );
};
