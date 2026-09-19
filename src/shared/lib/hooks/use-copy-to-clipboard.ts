import { useCallback, useRef, useState } from 'react';

type CopyStatus = 'idle' | 'copied' | 'error';

/**
 * The hook knows nothing about toasts or message copy — it returns a status and
 * lets the caller decide how to tell the user. That way a single hook survives
 * any change of design system.
 */
export const useCopyToClipboard = (resetDelayMs = 2000) => {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = useCallback(
    async (value: string) => {
      clearTimeout(timeoutRef.current);

      try {
        await navigator.clipboard.writeText(value);
        setStatus('copied');

        return true;
      } catch {
        setStatus('error');

        return false;
      } finally {
        timeoutRef.current = setTimeout(() => setStatus('idle'), resetDelayMs);
      }
    },
    [resetDelayMs],
  );

  return { status, copy };
};
