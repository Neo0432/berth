'use client';

import { lazy, type ReactNode, Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from '@shared/api';

import { MockServiceWorker } from './mock-service-worker';

/**
 * Devtools exist in the dev build only. The ternary on `process.env.NODE_ENV`
 * (inlined as 'production' in the build) makes the dynamic import unreachable,
 * so the bundler strips it together with its dependencies.
 */
const ReactQueryDevtools =
  process.env.NODE_ENV === 'development'
    ? lazy(() => import('@tanstack/react-query-devtools').then((module) => ({ default: module.ReactQueryDevtools })))
    : null;

export const AppProviders = ({ children }: { children: ReactNode }) => {
  // Called during render on purpose, as TanStack recommends for the App Router:
  // useState would lose the client if React suspends during the first render.
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MockServiceWorker>{children}</MockServiceWorker>

      {ReactQueryDevtools && (
        <Suspense>
          <ReactQueryDevtools buttonPosition="bottom-left" />
        </Suspense>
      )}
    </QueryClientProvider>
  );
};
