import { ENV } from '@shared/config';

type LogArgs = readonly unknown[];

const write = (level: 'log' | 'warn' | 'error' | 'debug', prefix: string, args: LogArgs) => {
  if (!ENV.isDev) {
    return;
  }

  // eslint-disable-next-line no-console
  console[level](prefix, ...args);
};

export const logger = {
  log: (...args: LogArgs) => write('log', '[log]', args),
  warn: (...args: LogArgs) => write('warn', '[warn]', args),
  debug: (...args: LogArgs) => write('debug', '[debug]', args),
  /** Errors are always written — in production the monitoring service picks them up (NFR-6). */
  error: (...args: LogArgs) => console.error('[error]', ...args),
};
