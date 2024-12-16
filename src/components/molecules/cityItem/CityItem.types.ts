import { AutocompleteCity } from '../../../services/autocomplete/autocomplete.types';

export type CityItemProps = {
  city: AutocompleteCity;
  handleCitySelect: (city: AutocompleteCity) => void;
};
