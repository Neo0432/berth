import { useLayoutEffect } from 'react';

/**
 * Locks body scrolling (modals, drawers).
 * Compensates for the scrollbar width, otherwise the content jumps on open.
 */
export const useLockBodyScroll = (isLocked: boolean) => {
  useLayoutEffect(() => {
    if (!isLocked) {
      return;
    }

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isLocked]);
};
