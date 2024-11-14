export const ROUTES = {
  AUTH: '/',
  HOME: '/home',
  FAVORITE_CITIES: '/favorite-cities',
  CITIES: '/cities',
  MAP: '/map',
};

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
