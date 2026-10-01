import type { ReactNode } from 'react';

import { useMediaQuery } from '@shared/lib';

export const useMediaQueryLineBreak = (maxWidth: string, replacement: ReactNode = ' ') => {
  const isReplaced = useMediaQuery(`(max-width: ${maxWidth})`);

  return () => (isReplaced ? replacement : <br />);
};
