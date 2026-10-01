export const isNotEmptyObject = <T = unknown>(value: T): value is NonNullable<T> => {
  return !!value && value.constructor === Object && Object.keys(value || {}).length !== 0;
};
