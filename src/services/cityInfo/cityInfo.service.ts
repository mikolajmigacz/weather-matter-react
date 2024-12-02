import axios from 'axios';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from '../../config/firebase';

import { CityApiResponse, CityDetails, FirestoreCityData } from './cityInfo.types';
import { CityMapper } from './mappers';

export class CityService {
  private static readonly BASE_URL =
    'http://dataservice.accuweather.com/locations/v1/cities/search';
  private static readonly API_KEY = import.meta.env.VITE_ACCU_WEATHER_KEY;
  private static readonly COLLECTION_NAME = 'citiesInfo';

  static async getCityDetails(cityName: string): Promise<CityDetails | null> {
    try {
      const cityDoc = await getDoc(doc(db, this.COLLECTION_NAME, cityName.toLowerCase()));

      if (cityDoc.exists()) {
        const data = cityDoc.data() as FirestoreCityData;
        return CityMapper.fromFirestore(data);
      }

      const cityDetails = await this.fetchFromApi(cityName);
      if (cityDetails) {
        await this.storeInFirestore(cityName, cityDetails);
        return cityDetails;
      }

      return null;
    } catch (error) {
      console.error('Error getting city details:', error);
      throw error;
    }
  }

  private static async fetchFromApi(cityName: string): Promise<CityDetails | null> {
    try {
      const { data } = await axios.get<CityApiResponse[]>(this.BASE_URL, {
        params: {
          apikey: this.API_KEY,
          q: cityName,
          language: 'pl',
        },
      });

      if (!data.length) {
        return null;
      }

      return CityMapper.fromApiResponse(data[0]);
    } catch (error) {
      console.error('Error fetching from API:', error);
      return null;
    }
  }

  private static async storeInFirestore(cityName: string, cityDetails: CityDetails): Promise<void> {
    try {
      await setDoc(
        doc(collection(db, this.COLLECTION_NAME), cityName.toLowerCase()),
        CityMapper.toFirestore(cityDetails)
      );
    } catch (error) {
      console.error('Error storing in Firestore:', error);
      throw error;
    }
  }
}
