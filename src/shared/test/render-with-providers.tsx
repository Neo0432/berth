import { QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createMemoryRouter, RouterProvider } from 'react-router';

import { createQueryClient } from '@shared/api';
import { i18n } from '@shared/i18n';

interface Options extends Omit<RenderOptions, 'wrapper'> {
  /** Initial route, when the component depends on routing. */
  route?: string;
}

/**
 * Renders the way the app does: same providers, but a fresh QueryClient per test
 * so the cache never leaks between cases.
 */
export const renderWithProviders = (ui: ReactElement, { route = '/', ...options }: Options = {}) => {
  const queryClient = createQueryClient();

  const Wrapper = ({ children }: { children: ReactNode }) => {
    const router = createMemoryRouter([{ path: '*', element: children }], { initialEntries: [route] });

    return (
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </I18nextProvider>
    );
  };

  return {
    user: userEvent.setup(),
    queryClient,
    ...render(ui, { wrapper: Wrapper, ...options }),
  };
};

export * from '@testing-library/react';
