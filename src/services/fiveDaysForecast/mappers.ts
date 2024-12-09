import { DayForecast, DayForecastApiResponse, Temperature } from './fiveDaysForecast.types';

export class WeatherMapper {
  static mapTemperature(temperature: {
    Minimum: { Value: number; Unit: string };
    Maximum: { Value: number; Unit: string };
  }): Temperature {
    return {
      minimum: temperature.Minimum.Value.toString(),
      maximum: temperature.Maximum.Value.toString(),
      unit: temperature.Maximum.Unit,
    };
  }

  static formatDate(date: string): string {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleDateString('pl-PL', {
      day: '2-digit',
      month: '2-digit',
    });
  }

  static mapDayForecast(data: DayForecastApiResponse): DayForecast {
    return {
      date: this.formatDate(data.Date),
      temperature: this.mapTemperature(data.Temperature),
      icon: data.Day.Icon,
      iconPhrase: data.Day.IconPhrase,
    };
  }
}
