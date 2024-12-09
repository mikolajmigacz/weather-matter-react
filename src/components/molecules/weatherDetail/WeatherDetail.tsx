import React from 'react';

import { FontSizes } from '../../../constants/fontSizes';
import { useAppSelector } from '../../../store/hooks';

import { DetailContainer, DetailText, IconWrapper } from './WeatherDetail.styles';
import { WeatherDetailProps } from './WeatherDetail.types';

export const WeatherDetail: React.FC<WeatherDetailProps> = ({ icon, title, value }) => {
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  return (
    <DetailContainer isMobile={isMobile}>
      <IconWrapper isMobile={isMobile}>{icon}</IconWrapper>
      <DetailText>
        <span style={{ fontSize: isMobile ? FontSizes.h6.mobile : FontSizes.h6.web }}>{title}</span>
        <span style={{ fontSize: isMobile ? FontSizes.h5.mobile : FontSizes.h5.web }}>{value}</span>
      </DetailText>
    </DetailContainer>
  );
};
