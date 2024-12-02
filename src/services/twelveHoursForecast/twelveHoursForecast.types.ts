export type HourForecastTemperature = {
  value: string;
  unit: string;
};

export type HourForecast = {
  dateTime: string;
  weatherIcon: number;
  temperature: HourForecastTemperature;
};

export type HourForecastApiResponse = {
  DateTime: string;
  WeatherIcon: number;
  Temperature: {
    Value: number;
    Unit: string;
  };
};
