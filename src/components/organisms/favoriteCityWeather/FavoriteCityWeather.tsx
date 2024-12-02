import { AppColors } from '../../../constants';
import { CityName } from '../../atoms/cityName/CityName';
import { Temperature } from '../../atoms/temperature/Temperature';
import { WeatherIcon } from '../../atoms/weatherIcon/WeatherIcon';

import {
  WeatherContainer,
  WeatherInfo,
  TemperatureWrapper,
  FeelsLikeWrapper,
} from './FavoriteCityWeather.styles';
import { FavoriteCityWeatherProps } from './FavoriteCityWeather.types';

export const FavoriteCityWeather = ({ cityName, currentConditions }: FavoriteCityWeatherProps) => {
  return (
    <WeatherContainer>
      <WeatherInfo>
        <CityName name={cityName} />
        <FeelsLikeWrapper>
          Temperatura odczuwalna:{' '}
          <Temperature
            value={currentConditions.realFeelTemperature.value}
            unit={currentConditions.realFeelTemperature.unit}
            fontSize={20}
            color={AppColors.teal}
          />
        </FeelsLikeWrapper>
        <TemperatureWrapper>
          <Temperature
            value={currentConditions.temperature.value}
            unit={currentConditions.temperature.unit}
          />
        </TemperatureWrapper>
      </WeatherInfo>
      <WeatherIcon iconNumber={currentConditions.weatherIcon} />
    </WeatherContainer>
  );
};
