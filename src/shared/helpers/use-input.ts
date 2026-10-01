import { type ChangeEventHandler, useEffect, useRef, useState } from 'react';

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const signal = useRef(true);

  const onSetInitialValue = () => {
    if (signal.current && initialValue) {
      setValue(initialValue);

      signal.current = false;
    }
  };

  useEffect(() => onSetInitialValue(), [signal, initialValue]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const onClear = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    onClear,
  };
};
