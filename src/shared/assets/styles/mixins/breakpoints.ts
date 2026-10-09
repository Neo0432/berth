const BREAKPOINT_SIZES = {
  'mobile-s': 320,
  'mobile-m': 375,
  'mobile-l': 424,
  'mobile-xl': 475,
  tablet: 768,
  'laptop-s': 1024,
  'laptop-m': 1200,
  'laptop-l': 1440,
  desktop: 1920,
} as const;

type BreakpointKeys = keyof typeof BREAKPOINT_SIZES;

type BreakpointValues = Readonly<Record<`min-${BreakpointKeys}` | `max-${BreakpointKeys}`, string>>;

export const BREAKPOINTS = Object.fromEntries(
  Object.entries(BREAKPOINT_SIZES).flatMap(([key, size]) => [
    [`min-${key}`, `${size}px`],
    [`max-${key}`, `${size - 0.02}px`],
  ]),
) as BreakpointValues;
