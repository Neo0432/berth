export const isEmptyObject = <T extends unknown>(value?: any): value is T => {
  return !!value && value.constructor === Object && Object.keys(value || {}).length === 0;
};
