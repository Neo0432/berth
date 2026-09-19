import { ENV } from '@shared/config';

import { ApiError } from './api-error';

type QueryParams = Record<string, string | number | boolean | null | undefined | (string | number)[]>;

interface RequestOptions extends Omit<RequestInit, 'body' | 'method'> {
  params?: QueryParams;
  body?: unknown;
}

interface ErrorPayload {
  code?: string;
  message?: string;
  details?: unknown;
}

const buildUrl = (path: string, params?: QueryParams) => {
  const url = new URL(`${ENV.apiBaseUrl}${path}`);

  if (!params) {
    return url.toString();
  }

  for (const [key, value] of Object.entries(params)) {
    if (value == null || value === '') {
      continue;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => url.searchParams.append(key, String(item)));
      continue;
    }

    url.searchParams.set(key, String(value));
  }

  return url.toString();
};

const toApiError = async (response: Response) => {
  let payload: ErrorPayload = {};

  try {
    payload = (await response.json()) as ErrorPayload;
  } catch {
    // The body may be empty or non-JSON — no reason to blow up while parsing an error.
  }

  return new ApiError({
    status: response.status,
    code: payload.code,
    message: payload.message ?? (response.statusText || 'Request failed'),
    details: payload.details,
  });
};

const request = async <Result>(method: string, path: string, options: RequestOptions = {}): Promise<Result> => {
  const { params, body, headers, ...rest } = options;

  const isFormData = body instanceof FormData;

  const response = await fetch(buildUrl(path, params), {
    method,
    // The session lives in an HttpOnly cookie (FR-4.1), so credentials are required
    // and there are deliberately no tokens in localStorage.
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
      ...headers,
    },
    ...(body === undefined ? {} : { body: isFormData ? body : JSON.stringify(body) }),
    ...rest,
  });

  if (!response.ok) {
    throw await toApiError(response);
  }

  if (response.status === 204) {
    return undefined as Result;
  }

  return (await response.json()) as Result;
};

export const apiClient = {
  get: <Result>(path: string, options?: RequestOptions) => request<Result>('GET', path, options),
  post: <Result>(path: string, options?: RequestOptions) => request<Result>('POST', path, options),
  patch: <Result>(path: string, options?: RequestOptions) => request<Result>('PATCH', path, options),
  put: <Result>(path: string, options?: RequestOptions) => request<Result>('PUT', path, options),
  delete: <Result>(path: string, options?: RequestOptions) => request<Result>('DELETE', path, options),
};

export type { QueryParams, RequestOptions };
