export type Temperature = {
  minimum: string;
  maximum: string;
  unit: string;
};

export type DayForecast = {
  date: string;
  temperature: Temperature;
  icon: number;
  iconPhrase: string;
};

export type DayForecastApiResponse = {
  Date: string;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
    };
    Maximum: {
      Value: number;
      Unit: string;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
  };
};
