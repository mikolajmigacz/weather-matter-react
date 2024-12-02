import { CityApiResponse, CityDetails, FirestoreCityData } from './cityInfo.types';

export class CityMapper {
  static toFirestore(cityDetails: CityDetails): FirestoreCityData {
    return {
      GeoPosition: {
        Latitude: cityDetails.latitude,
        Longitude: cityDetails.longitude,
      },
      country: {
        EnglishName: cityDetails.country.englishName,
        ID: cityDetails.country.id,
        LocalizedName: cityDetails.country.localizedName,
      },
      englishName: cityDetails.englishName,
      key: cityDetails.key,
      localizedName: cityDetails.localizedName,
      region: {
        EnglishName: cityDetails.region.englishName,
        ID: cityDetails.region.id,
        LocalizedName: cityDetails.region.localizedName,
      },
    };
  }

  static fromFirestore(data: FirestoreCityData): CityDetails {
    return {
      key: data.key,
      englishName: data.englishName,
      localizedName: data.localizedName,
      latitude: data.GeoPosition.Latitude,
      longitude: data.GeoPosition.Longitude,
      country: {
        id: data.country.ID,
        englishName: data.country.EnglishName,
        localizedName: data.country.LocalizedName,
      },
      region: {
        id: data.region.ID,
        englishName: data.region.EnglishName,
        localizedName: data.region.LocalizedName,
      },
    };
  }

  static fromApiResponse(data: CityApiResponse): CityDetails {
    return {
      key: data.Key,
      localizedName: data.LocalizedName,
      englishName: data.EnglishName,
      region: {
        id: data.Region.ID,
        localizedName: data.Region.LocalizedName,
        englishName: data.Region.EnglishName,
      },
      country: {
        id: data.Country.ID,
        localizedName: data.Country.LocalizedName,
        englishName: data.Country.EnglishName,
      },
      latitude: data.GeoPosition.Latitude,
      longitude: data.GeoPosition.Longitude,
    };
  }
}
