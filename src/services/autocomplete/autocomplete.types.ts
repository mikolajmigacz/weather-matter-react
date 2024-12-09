export type Country = {
  id: string;
  name: string;
};

export type AdministrativeArea = {
  id: string;
  name: string;
};

export type AutocompleteCity = {
  key: string;
  localizedName: string;
  country: Country;
  administrativeArea: AdministrativeArea;
};
