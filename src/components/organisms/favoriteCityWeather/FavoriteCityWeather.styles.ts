import { useMediaQuery } from '@mui/material';
import styled from 'styled-components';

import { MobileInfoProp } from './FavoriteCityWeather.types';

export const WeatherContainer = styled.div<MobileInfoProp>`
  height: ${({ isMobile }) => (isMobile ? '150px' : '200px')};
  padding: ${() => (useMediaQuery('(max-width:600px)') ? '16px' : '32px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TemperatureWrapper = styled.div<MobileInfoProp>`
  margin-top: ${({ isMobile }) => (isMobile ? '24px' : '36px')};
`;

export const FeelsLikeWrapper = styled.div<MobileInfoProp & { theme: string }>`
  color: ${({ theme }) => theme.colors.teal};
  font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
`;
