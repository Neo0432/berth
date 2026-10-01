export function isAllOf(value: any) {
  return (...other: any[]) => other.every((item) => item === value);
}
