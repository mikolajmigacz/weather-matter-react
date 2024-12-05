import axios from 'axios';

import { WeatherMapper } from './mappers';
import { HourForecast, HourForecastApiResponse } from './twelveHoursForecast.types';

export class TwelveHoursForecastService {
  private static readonly BASE_URL =
    'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour';
  private static readonly API_KEY = import.meta.env.VITE_ACCU_WEATHER_KEY;

  static async getTwelveHoursForecast(cityKey: string): Promise<HourForecast[]> {
    try {
      if (!this.API_KEY) {
        throw new Error('API key not found in environment variables');
      }

      const { data } = await axios.get<HourForecastApiResponse[]>(`${this.BASE_URL}/${cityKey}`, {
        params: {
          apikey: this.API_KEY,
          language: 'pl-pl',
          details: true,
          metric: true,
        },
      });

      if (!data?.length) {
        throw new Error('Empty response from API');
      }

      return data.map((forecast) => WeatherMapper.mapHourForecast(forecast));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to fetch 12-hour forecast: ${error.response?.status}`);
      }
      throw error;
    }
  }
}
