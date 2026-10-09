export const isZero = <T extends 0>(...counters: Array<unknown>) =>
  [...counters].every((value): value is T => value === 0);
