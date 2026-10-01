export const isFunction = (action: ((value: any) => void) | unknown): action is (...values: any[]) => any => {
  return typeof action === 'function';
};
