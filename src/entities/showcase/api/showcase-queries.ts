import { queryOptions } from '@tanstack/react-query';

import { apiClient, type ShowcaseDto } from '@shared/api';
import type { PaginatedResponse } from '@shared/types';

export interface ShowcaseListParams {
  page?: number;
  pageSize?: number;
}

export const showcaseQueries = {
  all: () => ['showcases'] as const,

  list: (params: ShowcaseListParams) =>
    queryOptions({
      queryKey: [...showcaseQueries.all(), 'list', params],
      queryFn: () =>
        apiClient.get<PaginatedResponse<ShowcaseDto>>('/showcases', {
          params: { page: params.page, pageSize: params.pageSize },
        }),
    }),
};
