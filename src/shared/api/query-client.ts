import { isServer, QueryClient } from '@tanstack/react-query';

import { isApiError } from './api-error';

const RETRY_LIMIT = 2;

/**
 * A factory, not a singleton: tests and Storybook each need a clean client,
 * otherwise the cache from one test leaks into the next.
 */
export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
          if (isApiError(error) && !error.isRetryable) {
            return false;
          }

          return failureCount < RETRY_LIMIT;
        },
      },
      mutations: {
        retry: false,
      },
    },
  });

let browserQueryClient: QueryClient | undefined;

/**
 * On the server every request gets its own client: module scope there is shared
 * by all users, so a singleton would serve one user's cached data to another.
 * In the browser there is one user, and recreating the client would drop the
 * cache whenever React suspends during the first render.
 */
export const getQueryClient = () => {
  if (isServer) {
    return createQueryClient();
  }

  browserQueryClient ??= createQueryClient();

  return browserQueryClient;
};
