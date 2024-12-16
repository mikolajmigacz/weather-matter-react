import { AutocompleteCity } from '../../../services/autocomplete/autocomplete.types';
import { CurrentConditions } from '../../../services/currentConditions';

export type CityDetailsProps = {
  selectedCity: AutocompleteCity | null;
  cityConditions: CurrentConditions | null;
};
