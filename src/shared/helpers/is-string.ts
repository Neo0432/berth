export const isString = <T extends string>(value: any): value is T => {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  }

  return false;
};
