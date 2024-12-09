import styled from 'styled-components';

import { AppColors } from '../../../constants';

export const DetailContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ isMobile }) => (isMobile ? '4px' : ' 8px')};
  color: ${AppColors.lightestGray};
`;

export const DetailText = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.7);
  }

  span:last-child {
    font-weight: bold;
  }
`;

export const IconWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isMobile }) => (isMobile ? '24px' : ' 48px')};
  height: ${({ isMobile }) => (isMobile ? '24px' : ' 48px')};
`;
