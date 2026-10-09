export const isBoolean = <T extends boolean>(value: any): value is T => {
  return Boolean(value) === value;
};
