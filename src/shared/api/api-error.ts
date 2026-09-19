/**
 * The only error type the api layer throws outwards.
 * Thanks to it the UI never has to guess what shape an error has.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly details: unknown;

  constructor(params: { status: number; code?: string | undefined; message: string; details?: unknown }) {
    super(params.message);

    this.name = 'ApiError';
    this.status = params.status;
    this.code = params.code ?? 'unknown_error';
    this.details = params.details;
  }

  get isUnauthorized() {
    return this.status === 401;
  }

  get isForbidden() {
    return this.status === 403;
  }

  get isNotFound() {
    return this.status === 404;
  }

  /** Retrying a 4xx is pointless — the response will not change. */
  get isRetryable() {
    return this.status === 408 || this.status === 429 || this.status >= 500;
  }
}

export const isApiError = (error: unknown): error is ApiError => error instanceof ApiError;
