import { type ClearIndicatorProps, components, type GroupBase } from 'react-select';

import { SvgClose } from '@shared/assets/icons/components/common';

export const ClearIndicator = <OptionType, IsMulti extends boolean, Group extends GroupBase<OptionType>>(
  props: ClearIndicatorProps<OptionType, IsMulti, Group>,
) => (
  <components.ClearIndicator {...props}>
    <SvgClose width={20} height={20} aria-hidden />
  </components.ClearIndicator>
);
