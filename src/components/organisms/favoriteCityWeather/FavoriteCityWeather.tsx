import { AppColors } from '../../../constants';
import { useAppSelector } from '../../../store/hooks';
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
  const isMobile = useAppSelector((state) => state.ui.isMobile);

  return (
    <WeatherContainer isMobile={isMobile}>
      <WeatherInfo>
        <CityName name={cityName} fontSize={isMobile ? 32 : 40} />
        <FeelsLikeWrapper isMobile={isMobile}>
          Temperatura odczuwalna:{' '}
          <Temperature
            value={currentConditions.realFeelTemperature.value}
            unit={currentConditions.realFeelTemperature.unit}
            fontSize={isMobile ? 16 : 20}
            color={AppColors.teal}
          />
        </FeelsLikeWrapper>
        <TemperatureWrapper isMobile={isMobile}>
          <Temperature
            value={currentConditions.temperature.value}
            unit={currentConditions.temperature.unit}
            fontSize={isMobile ? 32 : undefined}
          />
        </TemperatureWrapper>
      </WeatherInfo>
      <WeatherIcon iconNumber={currentConditions.weatherIcon} />
    </WeatherContainer>
  );
};
