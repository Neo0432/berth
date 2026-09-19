import { http, HttpResponse } from 'msw';

import { ENV } from '@shared/config';

/** Baseline handlers. Entity-specific ones live next to their own api layer. */
export const handlers = [http.get(`${ENV.apiBaseUrl}/health`, () => HttpResponse.json({ status: 'ok' }))];
