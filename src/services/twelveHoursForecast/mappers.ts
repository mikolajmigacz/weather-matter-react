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
      unit: `${temperature.Unit}`,
    };
  }

  static mapHourForecast(data: HourForecastApiResponse): HourForecast {
    return {
      dateTime: data.DateTime,
      weatherIcon: data.WeatherIcon,
      temperature: this.mapHourForecastTemperature(data.Temperature),
    };
  }
}
