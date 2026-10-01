import '@testing-library/jest-dom';

import { server } from './msw/server';

beforeAll(() => {
  // A request without a handler fails the test instead of silently passing.
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

afterAll(() => {
  server.close();
});

// jsdom has no ResizeObserver, and no layout for it to report on anyway —
// without this stub every table fails to render in tests.
global.ResizeObserver = class {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
};

// jsdom has no matchMedia — without this stub anything using media queries breaks.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});
