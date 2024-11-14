import { AppLayout } from './layout/AppLayout';
import { AppProviders } from './providers/AppProviders';

export const App = () => (
  <AppProviders>
    <AppLayout />
  </AppProviders>
);
