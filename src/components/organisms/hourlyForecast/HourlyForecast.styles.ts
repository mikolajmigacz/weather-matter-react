import styled from 'styled-components';

import { AppColors } from '../../../constants';

export const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${AppColors.darkGray};
  border-radius: 36px;
  background-color: ${AppColors.darkGray};
  padding: ${({ isMobile }) => (isMobile ? '16px' : '24px')};
  gap: ${({ isMobile }) => (isMobile ? '12px' : '16px')};
`;

export const ForecastContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
  }
`;

export const ForecastItem = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: ${({ isMobile }) => (isMobile ? '16px 36px' : '24px')};

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: ${({ isMobile }) => (isMobile ? '70%' : '100%')};
    width: 1px;
    background-color: ${AppColors.teal};
  }
`;
