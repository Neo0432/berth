import { z } from 'zod';

/**
 * Environment variables are validated ONCE at startup.
 * A broken .env crashes the app right here with a readable message instead of
 * half an hour later at runtime with `fetch('undefined/projects')`.
 */
const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.url({ error: 'NEXT_PUBLIC_API_BASE_URL must be a valid URL' }),
  NEXT_PUBLIC_ENABLE_API_MOCKS: z
    .enum(['true', 'false'])
    .default('false')
    .transform((value) => value === 'true'),
});

// Next inlines NEXT_PUBLIC_* into the client bundle only for literal
// `process.env.NAME` reads. Passing `process.env` as a whole would hand zod an
// empty object in the browser, so every variable is listed explicitly.
const parsed = envSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  NEXT_PUBLIC_ENABLE_API_MOCKS: process.env.NEXT_PUBLIC_ENABLE_API_MOCKS,
});

if (!parsed.success) {
  throw new Error(`Invalid environment variables:\n${z.prettifyError(parsed.error)}`);
}

export const ENV = {
  apiBaseUrl: parsed.data.NEXT_PUBLIC_API_BASE_URL,
  enableApiMocks: parsed.data.NEXT_PUBLIC_ENABLE_API_MOCKS,
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
} as const;
