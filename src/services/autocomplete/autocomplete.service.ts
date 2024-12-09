import axios from 'axios';

import { AutocompleteCity } from './autocomplete.types';
import { AutocompleteMapper } from './mapper';

export class AutocompleteService {
  private static readonly BASE_URL =
    'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
  private static readonly API_KEY = import.meta.env.VITE_ACCU_WEATHER_KEY;

  static async fetchAutocomplete(query: string): Promise<AutocompleteCity[]> {
    try {
      if (!this.API_KEY) {
        throw new Error('API key not found in environment variables');
      }

      const { data } = await axios.get(this.BASE_URL, {
        params: {
          apikey: this.API_KEY,
          q: query,
          language: 'pl-pl',
        },
      });

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Empty response from API');
      }

      return AutocompleteMapper.mapAutocompleteCities(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to fetch autocomplete results: ${error.response?.status}`);
      }
      throw error;
    }
  }
}
