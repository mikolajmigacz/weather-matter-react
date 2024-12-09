import React from 'react';

import AirIcon from '@mui/icons-material/Air';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import { useAppSelector } from '../../../store/hooks';
import { WeatherDetail } from '../../molecules/weatherDetail/WeatherDetail';

import { CurrentWeatherInfoProps } from './CurrentWeatherInfo,types';
import {
  BottomLeft,
  BottomRight,
  InfoContainer,
  TopLeft,
  TopRight,
} from './CurrentWeatherInfo.styles';

export const CurrentWeatherInfo: React.FC<CurrentWeatherInfoProps> = ({ currentConditions }) => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  return (
    <InfoContainer isMobile={isMobile}>
      <TopLeft>
        <WeatherDetail
          icon={<DeviceThermostatIcon />}
          title="Temperatura odczuwalna"
          value={`${currentConditions.realFeelTemperature.value}°${currentConditions.realFeelTemperature.unit}`}
        />
      </TopLeft>
      <TopRight>
        <WeatherDetail
          icon={<AirIcon />}
          title="Wiatr"
          value={`${currentConditions.windSpeed} km/h`}
        />
      </TopRight>
      <BottomLeft>
        <WeatherDetail
          icon={<WbSunnyIcon />}
          title="UV Index"
          value={currentConditions.uvIndexText}
        />
      </BottomLeft>
      <BottomRight>
        <WeatherDetail
          icon={<WaterDropIcon />}
          title="Wilgotność"
          value={`${currentConditions.relativeHumidity}%`}
        />
      </BottomRight>
    </InfoContainer>
  );
};
