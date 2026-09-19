export const isNullish = (value: unknown): value is null | undefined => value == null;

export const isNotNullish = <T>(value: T): value is NonNullable<T> => value != null;

export const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export const isNonEmptyString = (value: unknown): value is string => typeof value === 'string' && value.length > 0;

/**
 * Exhaustiveness guard for switch statements. Add a new member to the union and
 * forget to handle it, and the code stops compiling.
 */
export const assertNever = (value: never, message = 'Unhandled case'): never => {
  throw new Error(`${message}: ${JSON.stringify(value)}`);
};
