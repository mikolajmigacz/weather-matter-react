import { doc, updateDoc } from 'firebase/firestore';
import { getToken, onMessage } from 'firebase/messaging';

import { auth, db, messaging } from './firebase';

export const requestPermission = async () => {
  try {
    if (!messaging) {
      console.warn('Firebase Messaging is not supported in this browser.');
      return;
    }

    // Request permission for notifications
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      console.warn('Notification permissions not granted.');
      return;
    }

    // Retrieve FCM Token
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_VAPID_KEY,
    });

    if (!token) {
      console.warn('Failed to retrieve FCM token.');
      return;
    }

    console.log('FCM Token:', token);

    // Update Firestore with the FCM Token
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, { fcmToken: token });
      console.log('FCM Token successfully updated in Firestore.');
    } else {
      console.warn('No authenticated user found to associate the FCM token.');
    }

    return token;
  } catch (error) {
    console.error('Error during notification permission or token update:', error);
  }
};

// Listen for incoming messages if supported
if (messaging) {
  onMessage(messaging, (payload) => {
    console.log('Message received:', payload);
  });
}
