import { RouterProvider } from 'react-router';

import { AppProviders } from './providers';
import { router } from './router';

export const App = () => (
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>
);
