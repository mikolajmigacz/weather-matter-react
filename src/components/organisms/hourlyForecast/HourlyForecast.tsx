import React from 'react';

import { AppColors } from '../../../constants';
import { FontSizes } from '../../../constants/fontSizes';
import { useAppSelector } from '../../../store/hooks';
import { Temperature } from '../../atoms/temperature/Temperature';
import { WeatherIcon } from '../../atoms/weatherIcon/WeatherIcon';

import { Container, ForecastContainer, ForecastItem } from './HourlyForecast.styles';
import { HourlyForecastProps } from './HourlyForecast.types';

export const HourlyForecast: React.FC<HourlyForecastProps> = ({ forecasts }) => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  return (
    <Container isMobile={isMobile}>
      <h2
        style={{
          fontSize: isMobile ? FontSizes.h3.mobile : FontSizes.h3.web,
          color: AppColors.lightestGray,
        }}
      >
        Prognoza godzinowa
      </h2>
      <ForecastContainer isMobile={isMobile}>
        {forecasts.map((forecast) => (
          <ForecastItem key={forecast.dateTime} isMobile={isMobile}>
            <span
              style={{
                color: AppColors.lightestGray,
                fontSize: isMobile ? FontSizes.h4.mobile : FontSizes.h4.web,
              }}
            >
              {forecast.dateTime}
            </span>
            <WeatherIcon iconNumber={forecast.weatherIcon} size={isMobile ? 50 : 100} />
            <Temperature
              value={forecast.temperature.value}
              unit={forecast.temperature.unit}
              color={AppColors.lightestGray}
              fontSize={isMobile ? FontSizes.h4.mobile : FontSizes.h4.web}
            />
          </ForecastItem>
        ))}
      </ForecastContainer>
    </Container>
  );
};
