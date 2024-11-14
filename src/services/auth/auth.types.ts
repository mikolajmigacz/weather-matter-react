import { User } from '@firebase/auth';

export type AuthCredentials = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: User | null;
  error?: string;
};
