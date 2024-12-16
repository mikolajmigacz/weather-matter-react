import styled from 'styled-components';

import { AppColors } from '../../../constants';

export const CityItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  background-color: ${AppColors.darkGray};
  cursor: pointer;
`;

export const FlagImage = styled.img`
  width: 50px;
  height: 36px;
  border-radius: 20%;
  margin-right: 12px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${AppColors.lightestGray};
`;

export const CityName = styled.div<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: bold;
`;

export const CountryName = styled.div<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
  opacity: 0.7;
`;
