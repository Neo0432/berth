import type { Maybe, SelectOption } from '@shared/types/common';

import { isObject } from './is-object';

// TODO: Дописать return type, чтобы была возможность убрать null
export const convertingSelectValue = <T extends string | number>(value: Maybe<SelectOption<T>>) => {
  return isObject(value) && 'value' in value ? value.value : value;
};
