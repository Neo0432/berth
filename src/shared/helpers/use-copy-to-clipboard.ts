import { appToast } from '@shared/services/toaster';
import { Maybe } from '@shared/types/common';
import { useState } from 'react';

type CopiedValue = string | number;
type StateValue = Maybe<CopiedValue>;
type OnCopyFn = (value: CopiedValue, toastText?: string) => Promise<boolean>;

export const useCopyToClipboard = (): [StateValue, OnCopyFn] => {
  const [copiedText, setCopiedText] = useState<StateValue>(null);

  const onCopy: OnCopyFn = async (value, toastText = 'Copied!') => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported :(');

      return false;
    }

    try {
      await navigator.clipboard.writeText(`${value}`);
      setCopiedText(`${value}`);

      appToast({
        status: 'success',
        description: toastText,
      });

      return true;
    } catch (error) {
      setCopiedText(null);

      appToast({
        status: 'error',
        description: 'Copying failed!',
      });

      return false;
    }
  };

  return [copiedText, onCopy];
};
