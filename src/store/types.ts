export type UserState = {
  userId: string | null;
  login: string | null;
  name: string | null;
  favoriteCity: string | null;
};

export type GlobalState = {
  user: UserState;
};
