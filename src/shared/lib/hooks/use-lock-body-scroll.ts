import { useLayoutEffect } from 'react';

/**
 * Locks body scrolling (modals, drawers).
 * No scrollbar compensation: the root reserves the scrollbar gutter
 * (scrollbar-gutter in _global.scss), so hiding the overflow does not move the content.
 */
export const useLockBodyScroll = (isLocked: boolean) => {
  useLayoutEffect(() => {
    if (!isLocked) {
      return;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;

    body.style.overflow = 'hidden';

    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isLocked]);
};
