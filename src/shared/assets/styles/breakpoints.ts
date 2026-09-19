import breakpoints from './breakpoints.module.scss';

export const BREAKPOINT_NAMES = [
  'mobile-s',
  'mobile-m',
  'mobile-l',
  'tablet',
  'laptop-s',
  'laptop-m',
  'laptop-l',
  'desktop',
] as const;

export type BreakpointName = (typeof BREAKPOINT_NAMES)[number];

/** Values come from _breakpoints.scss — the single source of truth. */
export const BREAKPOINTS = breakpoints as Readonly<Record<BreakpointName, string>>;

export const mediaFrom = (name: BreakpointName) => `(min-width: ${BREAKPOINTS[name]})`;

export const mediaUntil = (name: BreakpointName) => `(max-width: calc(${BREAKPOINTS[name]} - 0.02px))`;
