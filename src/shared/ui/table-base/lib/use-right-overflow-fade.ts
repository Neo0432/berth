import { type RefObject, useLayoutEffect, useState } from 'react';

/**
 * True while the table is wider than its scroll container and not scrolled to
 * the end, i.e. part of it is hidden past the right edge.
 *
 * No synchronous first check: ResizeObserver reports every observed element
 * once right after observe(), which covers the initial render.
 */
export const useRightOverflowFade = (
  scrollRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
) => {
  const [hasRightOverflow, setHasRightOverflow] = useState(false);

  useLayoutEffect(() => {
    const scrollElement = scrollRef.current;
    const contentElement = contentRef.current;

    if (!scrollElement || !contentElement) {
      return;
    }

    let frameId = 0;

    const checkOverflow = () => {
      frameId = 0;

      const { scrollLeft, clientWidth, scrollWidth } = scrollElement;

      // 1px of slack: fractional widths are rounded differently across browsers.
      setHasRightOverflow(scrollLeft + clientWidth < scrollWidth - 1);
    };

    // Scroll and resize fire far more often than frames are painted.
    const scheduleCheck = () => {
      frameId ||= requestAnimationFrame(checkOverflow);
    };

    const resizeObserver = new ResizeObserver(scheduleCheck);

    resizeObserver.observe(scrollElement);
    resizeObserver.observe(contentElement);
    scrollElement.addEventListener('scroll', scheduleCheck, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      scrollElement.removeEventListener('scroll', scheduleCheck);
    };
  }, [scrollRef, contentRef]);

  return hasRightOverflow;
};
