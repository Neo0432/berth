import { useEffect } from 'react';

export const useLockBodyScroll = (isBlocked = true) => {
  useEffect(() => {
    let scrollContainer: HTMLElement;
    let previousOverflowValue: string;

    if (isBlocked) {
      scrollContainer = document.body;
      previousOverflowValue = scrollContainer?.style.overflow;

      scrollContainer.style.overflow = 'hidden';
    }

    return () => {
      if (isBlocked) {
        scrollContainer.style.overflow = previousOverflowValue;
      }
    };
  }, [isBlocked]);
};
