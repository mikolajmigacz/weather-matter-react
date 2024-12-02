import { CurrentConditions } from '../../../services/currentConditions';

export type FavoriteCityWeatherProps = {
  cityName: string;
  currentConditions: CurrentConditions;
};
