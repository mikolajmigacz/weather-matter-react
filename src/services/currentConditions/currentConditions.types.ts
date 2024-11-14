export type Temperature = {
  value: string;
  unit: string;
};

export type CurrentConditions = {
  weatherText: string;
  weatherIcon: number;
  temperature: Temperature;
  realFeelTemperature: Temperature;
  windSpeed: number;
  uvIndex: number;
  uvIndexText: string;
  relativeHumidity: number;
};

export type ApiCurrentConditions = {
  WeatherText: string;
  WeatherIcon: number;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
    };
  };
  RealFeelTemperature: {
    Metric: {
      Value: number;
      Unit: string;
    };
  };
  Wind: {
    Speed: {
      Metric: {
        Value: number;
      };
    };
  };
  UVIndex: number;
  UVIndexText: string;
  RelativeHumidity: number;
};
