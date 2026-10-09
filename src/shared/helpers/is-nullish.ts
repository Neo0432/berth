export const isNullish = <T extends unknown | null | undefined>(value?: any): value is T => {
  return value == null;
};
