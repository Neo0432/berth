import { z } from 'zod';

/**
 * Environment variables are validated ONCE at startup.
 * A broken .env crashes the app right here with a readable message instead of
 * half an hour later at runtime with `fetch('undefined/projects')`.
 */
const envSchema = z.object({
  VITE_API_BASE_URL: z.url({ error: 'VITE_API_BASE_URL must be a valid URL' }),
  VITE_ENABLE_API_MOCKS: z
    .enum(['true', 'false'])
    .default('false')
    .transform((value) => value === 'true'),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  throw new Error(`Invalid environment variables:\n${z.prettifyError(parsed.error)}`);
}

export const ENV = {
  apiBaseUrl: parsed.data.VITE_API_BASE_URL,
  enableApiMocks: parsed.data.VITE_ENABLE_API_MOCKS,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const;
