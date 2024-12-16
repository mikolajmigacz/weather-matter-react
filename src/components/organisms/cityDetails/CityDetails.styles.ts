import styled from 'styled-components';

import { AppColors } from '../../../constants';
import { FontSizes } from '../../../constants/fontSizes';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${AppColors.darkGray};
  border-radius: 12px;
  padding: 16px;
`;

export const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${AppColors.lightestGray};
`;

export const CityNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const TopSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const WeatherIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
`;

export const CityName = styled.div<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? FontSizes.h2.mobile : FontSizes.h2.web)}px;
  font-weight: bold;
  color: ${AppColors.lightestGray};
`;

export const SubInfo = styled.div<{ isMobile: boolean }>`
  font-size: ${(props) => (props.isMobile ? FontSizes.h4.mobile : FontSizes.h4.web)}px;
  color: ${AppColors.lightestGray};
  opacity: 0.7;
  text-align: center;
`;

export const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #50555e;
  border-radius: 12px;
  padding: 10px;
  background-color: #50555e;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #686d76;
  margin: 4px 0;
`;

export const LeftText = styled.div`
  color: rgba(255, 255, 255, 0.7);
`;

export const RightText = styled.div`
  color: ${AppColors.lightestGray};
`;
