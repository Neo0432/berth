import { useCallback, useMemo, useState } from 'react';

/**
 * A boolean flag with ready-made actions.
 *
 * Note that there is NO `useEffect` syncing initialValue back into state. That
 * kind of sync is the classic way to wipe out the user's choice on any parent
 * re-render. initialValue is read exactly once.
 */
export const useToggle = (initialValue = false) => {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = useCallback(() => setIsOn((previous) => !previous), []);
  const on = useCallback(() => setIsOn(true), []);
  const off = useCallback(() => setIsOn(false), []);

  return useMemo(() => ({ isOn, toggle, on, off, set: setIsOn }), [isOn, toggle, on, off]);
};
