import { QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactElement, ReactNode } from 'react';

import { createQueryClient } from '@shared/api';
import { routing } from '@shared/i18n';
import common from '@shared/i18n/locales/en/common.json';
import validation from '@shared/i18n/locales/en/validation.json';

const messages = { common, validation };

/**
 * Renders the way the app does: same providers, but a fresh QueryClient per test
 * so the cache never leaks between cases.
 */
export const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const queryClient = createQueryClient();

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <NextIntlClientProvider locale={routing.defaultLocale} messages={messages}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextIntlClientProvider>
  );

  return {
    user: userEvent.setup(),
    queryClient,
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from '@testing-library/react';
