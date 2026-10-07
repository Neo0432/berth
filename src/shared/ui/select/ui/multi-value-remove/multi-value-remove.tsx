import { components, type GroupBase, type MultiValueRemoveProps } from 'react-select';

import { SvgClose } from '@shared/assets/icons/components/common';

export const MultiValueRemove = <OptionType, IsMulti extends boolean, Group extends GroupBase<OptionType>>(
  props: MultiValueRemoveProps<OptionType, IsMulti, Group>,
) => (
  <components.MultiValueRemove {...props}>
    <SvgClose width={16} height={16} aria-hidden />
  </components.MultiValueRemove>
);
