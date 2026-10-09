export const isNumber = <T extends number>(value: any): value is T => {
  if (typeof value === "number" || value instanceof Number) {
    return true;
  }

  return false;
};
