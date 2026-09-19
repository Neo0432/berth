import { useCallback, useSyncExternalStore } from 'react';

/**
 * useSyncExternalStore rather than useState + useEffect: matchMedia is an
 * external source, so React should read it directly instead of wasting a render
 * on a wrong value in the first frame.
 */
export const useMediaQuery = (query: string) => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const mediaQuery = window.matchMedia(query);

      mediaQuery.addEventListener('change', onStoreChange);

      return () => mediaQuery.removeEventListener('change', onStoreChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};
