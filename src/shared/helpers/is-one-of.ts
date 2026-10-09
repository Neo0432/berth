export function isOneOf(value: any) {
  return (...other: any[]) => other.some((item) => item === value);
}
