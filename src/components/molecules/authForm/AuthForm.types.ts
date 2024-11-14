export type AuthFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
  favoriteCity?: string;
};

export type AuthFormProps = {
  isLogin: boolean;
  onSubmit: (data: AuthFormData) => Promise<void>;
  onToggleMode: () => void;
};
