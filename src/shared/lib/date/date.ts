import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(relativeTime);

/**
 * Thin functions instead of a wrapper class around dayjs.
 * dayjs is already immutable — wrapping it in a value object of our own means
 * paying in allocations for zero new functionality.
 */

export const DATE_FORMATS = {
  date: 'DD.MM.YYYY',
  dateLong: 'D MMMM YYYY',
  dateTime: 'DD.MM.YYYY HH:mm',
  monthYear: 'MMMM YYYY',
} as const;

export type DateInput = string | number | Date;

export const formatDate = (value: DateInput, format: string = DATE_FORMATS.date) => dayjs(value).format(format);

/** '3 days ago', 'in a month' — for the feed and application statuses. */
export const formatRelative = (value: DateInput) => dayjs(value).fromNow();

export const toIsoString = (value: DateInput) => dayjs(value).toISOString();

export const isPast = (value: DateInput) => dayjs(value).isBefore(dayjs());

/** Days left until the cycle deadline. Negative means the deadline has passed. */
export const daysUntil = (value: DateInput) => dayjs(value).startOf('day').diff(dayjs().startOf('day'), 'day');

export const addWeeks = (value: DateInput, weeks: number) => dayjs(value).add(weeks, 'week').toDate();
