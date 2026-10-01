export const isExhaustiveCheck = (value: never) => {
  throw new Error('Process all values:', value);
};
