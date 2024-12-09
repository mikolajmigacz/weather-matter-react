import styled from 'styled-components';

import { FontSizes } from '../../../constants/fontSizes';

export const DayItemWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DayLabel = styled.span<{ isMobile: boolean }>`
  color: rgba(255, 255, 255, 0.6);
  font-weight: bold;
  font-size: ${({ isMobile }) => (isMobile ? FontSizes.h6.mobile : FontSizes.h6.web)}px;
  flex: 0 0 10%;
`;

export const IconWrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ isMobile }) => (isMobile ? 4 : 8)}px;
  flex: 0 0 60%;
`;

export const Temperature = styled.span<{ isMobile: boolean }>`
  flex: 0 0 20%;
  text-align: right;
`;
