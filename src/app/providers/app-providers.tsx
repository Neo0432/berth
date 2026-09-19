import { lazy, type ReactNode, Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';

import { createQueryClient } from '@shared/api';
import { i18n } from '@shared/i18n';

import { AppErrorFallback } from './app-error-fallback';
import { ErrorBoundary } from './error-boundary';

/**
 * The client is created once per application, outside the component body:
 * inside it would be recreated on every render and lose its cache.
 */
const queryClient = createQueryClient();

/**
 * Devtools exist in the dev build only. The ternary on `import.meta.env.DEV`
 * (inlined as `false` in production) makes the dynamic import unreachable,
 * so the bundler strips it together with its dependencies.
 */
const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(() => import('@tanstack/react-query-devtools').then((module) => ({ default: module.ReactQueryDevtools })))
  : null;

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary fallback={<AppErrorFallback />}>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        {children}

        {ReactQueryDevtools && (
          <Suspense>
            <ReactQueryDevtools buttonPosition="bottom-left" />
          </Suspense>
        )}
      </QueryClientProvider>
    </I18nextProvider>
  </ErrorBoundary>
);
