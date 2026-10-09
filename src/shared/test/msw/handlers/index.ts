import { http, HttpResponse } from 'msw';

import { ENV } from '@shared/config';

import { showcaseHandlers } from './showcases';

/**
 * Every mock the worker and the test server start with. They live in shared
 * rather than next to each entity: shared cannot import entities, and a handler
 * exported from an entity's public API would pull msw into the production bundle.
 */
export const handlers = [
  http.get(`${ENV.apiBaseUrl}/health`, () => HttpResponse.json({ status: 'ok' })),
  ...showcaseHandlers,
];
