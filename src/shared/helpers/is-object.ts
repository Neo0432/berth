export const isObject = (value: any): value is Record<string, any> => {
  return value !== null && !Array.isArray(value) && typeof value === 'object';
};
