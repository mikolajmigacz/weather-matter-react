import { CurrentConditions } from '../services/currentConditions';

export type UserState = {
  userId: string | null;
  login: string | null;
  name: string | null;
  favoriteCity: string | null;
};

export type WeatherState = {
  favoriteCityCurrentConditions: CurrentConditions | null;
  selectedCityCurrentConditions: CurrentConditions | null;
};

export type UIState = {
  isLoading: boolean;
  isMobile: boolean;
};

export type GlobalState = {
  user: UserState;
  weather: WeatherState;
  ui: UIState;
};
