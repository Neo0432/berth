export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Maybe<T> = T | null | undefined;

export type Noop = () => void;

/** An object with known keys whose values are not filled in yet. */
export type PartialRecord<Key extends PropertyKey, Value> = Partial<Record<Key, Value>>;

/** Extracts a union of values from an `as const` object. The enum replacement. */
export type ValueOf<T> = T[keyof T];

export interface SelectOption<Value extends string | number = string> {
  label: string;
  value: Value;
  isDisabled?: boolean;
}

export interface PaginatedResponse<Item> {
  items: Item[];
  total: number;
  page: number;
  pageSize: number;
}
