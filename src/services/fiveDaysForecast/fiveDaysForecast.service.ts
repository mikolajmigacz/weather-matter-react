import axios from 'axios';

import { DayForecast, DayForecastApiResponse } from './fiveDaysForecast.types';
import { WeatherMapper } from './mappers';

export class FiveDaysForecastService {
  private static readonly BASE_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day';
  private static readonly API_KEY = import.meta.env.VITE_ACCU_WEATHER_KEY;

  static async getFiveDaysForecast(cityKey: string): Promise<DayForecast[]> {
    try {
      if (!this.API_KEY) {
        throw new Error('API key not found in environment variables');
      }

      const { data } = await axios.get<{ DailyForecasts: DayForecastApiResponse[] }>(
        `${this.BASE_URL}/${cityKey}`,
        {
          params: {
            apikey: this.API_KEY,
            language: 'pl-pl',
            metric: true,
            details: false,
          },
        }
      );

      if (!data?.DailyForecasts?.length) {
        throw new Error('Empty response from API');
      }

      return data.DailyForecasts.map((forecast) => WeatherMapper.mapDayForecast(forecast));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Failed to fetch 5-day forecast: ${error.response?.status}`);
      }
      throw error;
    }
  }
}
