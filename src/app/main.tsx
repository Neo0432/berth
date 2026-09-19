import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ENV } from '@shared/config';

import { App } from './app';

import './styles/index.scss';

/**
 * MSW starts before the first render — otherwise early requests bypass the mocks.
 *
 * The guard reads `import.meta.env.DEV` rather than ENV.isDev: Vite inlines it
 * as the literal `false` in production, so the bundler drops the whole dynamic
 * import. A plain property read would ship MSW to production — 420 kB of it.
 */
const startMocks = async () => {
  if (!import.meta.env.DEV) {
    return;
  }

  if (!ENV.enableApiMocks) {
    return;
  }

  const { worker } = await import('@shared/test/msw/browser');

  await worker.start({ onUnhandledRequest: 'bypass' });
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Missing #root element — check index.html');
}

void startMocks().then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
