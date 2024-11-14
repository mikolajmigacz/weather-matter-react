import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import { auth } from '../../config/firebase';

import { UserData } from './user.types';

const db = getFirestore();

export class UserService {
  private static COLLECTION_NAME = 'users';

  static async getUserData(userId: string): Promise<UserData | null> {
    try {
      const userDoc = await getDoc(doc(db, this.COLLECTION_NAME, userId));

      if (userDoc.exists()) {
        return userDoc.data() as UserData;
      }
      return null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  }

  static async saveUser(userData: UserData): Promise<void> {
    try {
      const userRef = doc(db, this.COLLECTION_NAME, userData.userId);
      await setDoc(userRef, userData);
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  }

  static getCurrentUserId(): string | null {
    return auth.currentUser?.uid || null;
  }
}
