import { getClasses } from './styles/get-classes';

export const SPINNER_SIZES = ['s', 'm', 'l'] as const;

export type SpinnerSize = (typeof SPINNER_SIZES)[number];

export interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
  /** Screen-reader text. Leave empty inside a button — the button has its own label. */
  label?: string;
}

export const Spinner = ({ size = 'm', className, label }: SpinnerProps) => {
  const { cnRoot } = getClasses({ className, size });

  return (
    <span
      className={cnRoot}
      role={label ? 'status' : 'presentation'}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
};
