export type Region = {
  id: string;
  localizedName: string;
  englishName: string;
};

export type Country = {
  id: string;
  localizedName: string;
  englishName: string;
};

export type CityDetails = {
  key: string;
  localizedName: string;
  englishName: string;
  region: Region;
  country: Country;
  latitude: number;
  longitude: number;
};

export type CityApiResponse = {
  Key: string;
  LocalizedName: string;
  EnglishName: string;
  Region: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  Country: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
  GeoPosition: {
    Latitude: number;
    Longitude: number;
  };
};

export type GeoPosition = {
  Latitude: number;
  Longitude: number;
};

export type FirestoreCityData = {
  key: string;
  englishName: string;
  localizedName: string;
  GeoPosition: GeoPosition;
  country: {
    EnglishName: string;
    ID: string;
    LocalizedName: string;
  };
  region: {
    EnglishName: string;
    ID: string;
    LocalizedName: string;
  };
};
