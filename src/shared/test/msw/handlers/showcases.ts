import { http, HttpResponse } from 'msw';

import type { ShowcaseDto } from '@shared/api';
import { ENV } from '@shared/config';
import type { PaginatedResponse } from '@shared/types';

const DEFAULT_PAGE_SIZE = 20;

const SHOWCASES: ShowcaseDto[] = [
  {
    id: 'showcase-1',
    title: 'Tabletop Session Planner',
    description: 'Schedules game nights around everyone’s calendar and keeps campaign notes in one place.',
    closedAt: '2026-09-14T12:00:00.000Z',
  },
  {
    id: 'showcase-2',
    title: 'Climbing Route Log',
    description: 'Logs gym and outdoor routes, grades them and charts progress over a season.',
    closedAt: '2026-08-30T12:00:00.000Z',
  },
  {
    id: 'showcase-3',
    title: 'Recipe Scaler',
    description: 'Rescales any recipe to the servings you need and converts the units on the way.',
    closedAt: '2026-08-02T12:00:00.000Z',
  },
  {
    id: 'showcase-4',
    title: 'Open Budget Tracker',
    description: 'A self-hosted budget app that imports bank exports and splits shared expenses.',
    closedAt: '2026-07-11T12:00:00.000Z',
  },
];

const readNumber = (value: string | null, fallback: number) => {
  const parsed = Number(value);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
};

export const showcaseHandlers = [
  // Newest first by closing date, as FR-9.6 requires from the real endpoint.
  http.get(`${ENV.apiBaseUrl}/showcases`, ({ request }) => {
    const { searchParams } = new URL(request.url);
    const page = readNumber(searchParams.get('page'), 1);
    const pageSize = readNumber(searchParams.get('pageSize'), DEFAULT_PAGE_SIZE);

    const sorted = SHOWCASES.toSorted((first, second) => second.closedAt.localeCompare(first.closedAt));
    const items = sorted.slice((page - 1) * pageSize, page * pageSize);

    return HttpResponse.json<PaginatedResponse<ShowcaseDto>>({ items, total: sorted.length, page, pageSize });
  }),
];
