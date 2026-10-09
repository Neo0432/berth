export const isNotNullish = <T extends unknown | null | undefined>(value?: T): value is NonNullable<T> => {
  return value != null;
};
