import React from 'react';

import ReactDOM from 'react-dom/client';

import { App } from './App';

if ('serviceWorker' in navigator && navigator.serviceWorker) {
  window.addEventListener('load', async () => {
    try {
      const swRegistration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Main Service Worker registered:', swRegistration);

      // Register Firebase Messaging Service Worker
      const messagingSW = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      console.log('Firebase Messaging Service Worker registered:', messagingSW);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  });
} else {
  console.warn('Service Worker not supported in this browser.');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
