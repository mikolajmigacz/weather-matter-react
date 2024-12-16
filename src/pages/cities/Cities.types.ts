import { AutocompleteCity } from '../../services/autocomplete/autocomplete.types';
import { CurrentConditions } from '../../services/currentConditions';

export type CitiesPageState = {
  query: string;
  isLoading: boolean;
  error: string | null;
  searchResults: AutocompleteCity[] | null;
  selectedCity: AutocompleteCity | null;
  cityConditions: CurrentConditions | null;
};
