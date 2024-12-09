import { AutocompleteCity } from './autocomplete.types';

export class AutocompleteMapper {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static mapAutocompleteCity(data: any): AutocompleteCity {
    return {
      key: data.Key,
      localizedName: data.LocalizedName,
      country: {
        id: data.Country.ID,
        name: data.Country.LocalizedName,
      },
      administrativeArea: {
        id: data.AdministrativeArea.ID,
        name: data.AdministrativeArea.LocalizedName,
      },
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static mapAutocompleteCities(data: any[]): AutocompleteCity[] {
    return data.map((item) => this.mapAutocompleteCity(item));
  }
}
