importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener('push', (event) => {
  const data = event.data.json();
  const notificationTitle = data.notification.title || 'Notification';
  const notificationOptions = {
    body: data.notification.body || 'New notification',
    icon: '/icons/Icon-192.png',
    badge: '/icons/Icon-192.png'
  };

  event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
});
