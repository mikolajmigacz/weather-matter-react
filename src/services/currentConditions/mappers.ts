import { ApiCurrentConditions, CurrentConditions, Temperature } from './currentConditions.types';

export class WeatherMapper {
  static mapTemperature(data: { Metric: { Value: number; Unit: string } }): Temperature {
    return {
      value: data.Metric.Value.toString(),
      unit: `${data.Metric.Unit}°`,
    };
  }

  static mapCurrentConditions(data: ApiCurrentConditions): CurrentConditions {
    return {
      weatherText: data.WeatherText,
      weatherIcon: data.WeatherIcon,
      temperature: this.mapTemperature(data.Temperature),
      realFeelTemperature: this.mapTemperature(data.RealFeelTemperature),
      windSpeed: data.Wind.Speed.Metric.Value,
      uvIndex: data.UVIndex,
      uvIndexText: data.UVIndexText,
      relativeHumidity: data.RelativeHumidity,
    };
  }
}
