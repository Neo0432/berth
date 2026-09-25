'use client';

import { type ReactNode, useEffect, useState } from 'react';

import { ENV } from '@shared/config';

let workerStart: Promise<unknown> | undefined;

/**
 * Starts the worker at most once per page. In development React StrictMode runs
 * every effect twice, and a second worker.start() throws "cannot configure an
 * already enabled network".
 *
 * The ternary reads `process.env.NODE_ENV` literally: Next inlines it as
 * 'production' in the build, which makes the import unreachable, so the bundler
 * drops MSW entirely. Hiding the check behind a helper would ship it to production.
 */
const startWorker =
  process.env.NODE_ENV === 'development'
    ? () => {
        workerStart ??= import('@shared/test/msw/browser').then(({ worker }) =>
          worker.start({ onUnhandledRequest: 'bypass' }),
        );

        return workerStart;
      }
    : null;

/**
 * Holds rendering until the worker is up — otherwise the first requests would
 * slip past the mocks. Only intercepts browser requests: fetches made by server
 * components need msw/node, which is not wired yet.
 */
export const MockServiceWorker = ({ children }: { children: ReactNode }) => {
  const [isReady, setIsReady] = useState(!startWorker || !ENV.enableApiMocks);

  useEffect(() => {
    if (!startWorker || !ENV.enableApiMocks) {
      return;
    }

    void startWorker().then(() => setIsReady(true));
  }, []);

  return isReady ? children : null;
};
