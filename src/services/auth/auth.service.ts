import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@firebase/auth';

import { auth } from '../../config/firebase';

import { AuthCredentials, AuthResponse } from './auth.types';

export class AuthService {
  static async register({ email, password }: AuthCredentials): Promise<AuthResponse> {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { user: userCredential.user };
    } catch (error) {
      return { user: null, error: (error as Error).message };
    }
  }

  static async login({ email, password }: AuthCredentials): Promise<AuthResponse> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return { user: userCredential.user };
    } catch (error) {
      return { user: null, error: (error as Error).message };
    }
  }

  static async logout(): Promise<{ error?: string }> {
    try {
      await signOut(auth);
      return {};
    } catch (error) {
      return { error: (error as Error).message };
    }
  }

  static getCurrentUser(): User | null {
    return auth.currentUser;
  }
}
