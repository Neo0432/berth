import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

/** MSW for the browser: lets the frontend move while the backend does not exist yet. */
export const worker = setupWorker(...handlers);
