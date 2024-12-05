import {
  HourForecast,
  HourForecastApiResponse,
  HourForecastTemperature,
} from './twelveHoursForecast.types';

export class WeatherMapper {
  static mapHourForecastTemperature(temperature: {
    Value: number;
    Unit: string;
  }): HourForecastTemperature {
    return {
      value: temperature.Value.toString(),
      unit: temperature.Unit,
    };
  }

  static formatDateTime(dateTime: string): string {
    const date = new Date(dateTime);
    return date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  static mapHourForecast(data: HourForecastApiResponse): HourForecast {
    return {
      dateTime: this.formatDateTime(data.DateTime),
      weatherIcon: data.WeatherIcon,
      temperature: this.mapHourForecastTemperature(data.Temperature),
    };
  }
}
