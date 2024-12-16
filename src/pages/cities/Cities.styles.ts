import styled from 'styled-components';

import { AppColors } from '../../constants';
import { FontSizes } from '../../constants/fontSizes';

export const MainContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ isMobile }) => (isMobile ? '24px' : '16px')};
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? ' 64px 16px' : '32px')};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
`;

export const SearchInput = styled.input<{ isMobile: boolean }>`
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? '16px 8px' : '32px 16px')};
  font-size: ${FontSizes.h4.web}px;
  border: none;
  border-radius: 36px;
  background-color: ${AppColors.darkGray};
  color: ${AppColors.lightestGray};

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ResultsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const LoupeIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  position: relative;

  &:after {
    content: '';
    width: 32px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    bottom: -12px;
    right: -12px;
    transform: rotate(45deg);
  }
`;

export const EmptyStateText = styled.p`
  margin-top: 16px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;

export const ContentWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? '16px' : '32px')};
  width: 100%;
  flex-grow: 1;
`;

export const ResultsWrapper = styled.div<{ isMobile: boolean; hasCityDetails: boolean }>`
  flex: ${({ isMobile, hasCityDetails }) => (isMobile ? 'none' : hasCityDetails ? '0 0 80%' : '1')};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CityDetailsWrapper = styled.div<{ isMobile: boolean }>`
  margin-top: 16px;
  width: 100%;
`;
