import React from 'react';

import { requestPermission } from './config/firebaseMessagings';
import { AppLayout } from './layout/AppLayout';
import { AppProviders } from './providers/AppProviders';

export const App = () => {
  React.useEffect(() => {
    requestPermission();
  }, []);

  return (
    <AppProviders>
      <AppLayout />
    </AppProviders>
  );
};
