import { CityDetails } from '../cityInfo/cityInfo.types';

export type Region = {
  id: string;
  name: string;
};

export type Country = {
  id: string;
  name: string;
};

export type GeoPosition = {
  latitude: number;
  longitude: number;
};

export type FirestoreCityDetails = {
  key: string;
  localizedName: string;
  englishName: string;
  region: {
    ID: string;
    LocalizedName: string;
  };
  country: {
    ID: string;
    LocalizedName: string;
  };
  geoPosition: {
    Latitude: number;
    Longitude: number;
  };
};

export type FavoriteCityResponse = {
  success: boolean;
  error?: string;
};

export type FavoriteCityFirestoreData = {
  cities: CityDetails[];
};

export type UserDocument = {
  fcmToken: string;
};
