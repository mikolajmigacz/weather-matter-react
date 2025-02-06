import styled from 'styled-components';

import { AppColors, FontSizes } from '../../constants';

export const MainContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ isMobile }) => (isMobile ? '24px' : '16px')};
  width: 100%;
  padding: ${({ isMobile }) => (isMobile ? ' 64px 16px' : '32px')};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
`;

export const Title = styled.span<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? FontSizes.h2.mobile : FontSizes.h2.web)}px;
  color: white;
`;
