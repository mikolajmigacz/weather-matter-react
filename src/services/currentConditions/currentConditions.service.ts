import axios from 'axios';

import { CurrentConditions } from './currentConditions.types';
import { WeatherMapper } from './mappers';

export class WeatherService {
  private static readonly BASE_URL = 'http://dataservice.accuweather.com/currentconditions/v1';
  private static readonly API_KEY = import.meta.env.VITE_ACCU_WEATHER_KEY;

  static async getCurrentConditions(cityKey: string): Promise<CurrentConditions> {
    try {
      if (!this.API_KEY) {
        throw new Error('API key not found in environment variables');
      }

      const { data } = await axios.get(`${this.BASE_URL}/${cityKey}`, {
        params: {
          apikey: this.API_KEY,
          language: 'pl-pl',
          details: true,
        },
      });

      if (!data?.length) {
        throw new Error('Empty response from API');
      }

      return WeatherMapper.mapCurrentConditions(data[0]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to fetch current conditions: ${error.response?.status}`);
      }
      throw error;
    }
  }

  static formatTemperature(conditions: CurrentConditions): string {
    return `${conditions.temperature.value}${conditions.temperature.unit}`;
  }

  static formatWindSpeed(conditions: CurrentConditions): string {
    return `${conditions.windSpeed} km/h`;
  }
}
