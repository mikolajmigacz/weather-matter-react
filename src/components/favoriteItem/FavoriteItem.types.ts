import { CityDetails } from '../../services/cityInfo/cityInfo.types';

export type FavoriteCityItemProps = {
  selectedCity: CityDetails;
  onDelete: () => void;
};
