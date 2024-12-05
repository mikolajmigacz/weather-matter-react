import React from 'react';

import { AppColors } from '../../../constants';
import { FontSizes } from '../../../constants/fontSizes';
import { Temperature } from '../../atoms/temperature/Temperature';
import { WeatherIcon } from '../../atoms/weatherIcon/WeatherIcon';

import { Container, ForecastContainer, ForecastItem } from './HourlyForecast.styles';
import { HourlyForecastProps } from './HourlyForecast.types';

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecasts }) => {
  return (
    <Container>
      <h2 style={{ fontSize: FontSizes.h3.web, color: AppColors.lightestGray }}>
        Prognoza godzinowa
      </h2>
      <ForecastContainer>
        {forecasts.map((forecast) => (
          <ForecastItem key={forecast.dateTime}>
            <span style={{ color: AppColors.lightestGray, fontSize: FontSizes.h4.web }}>
              {forecast.dateTime}
            </span>
            <WeatherIcon iconNumber={forecast.weatherIcon} size={100} />
            <Temperature
              value={forecast.temperature.value}
              unit={forecast.temperature.unit}
              color={AppColors.lightestGray}
              fontSize={FontSizes.h4.web}
            />
          </ForecastItem>
        ))}
      </ForecastContainer>
    </Container>
  );
};
