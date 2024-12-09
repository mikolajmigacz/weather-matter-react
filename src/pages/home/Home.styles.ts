import styled from 'styled-components';

import { AppColors } from '../../constants';

export const MainContainer = styled.div<{ isMobile: boolean }>`
  padding: ${({ isMobile }) => (isMobile ? '64px 32px 32px 32px' : '64px')};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? '48px' : '16px')};
`;

export const LeftColumn = styled.div<{ isMobile: boolean }>`
  flex: ${({ isMobile }) => (isMobile ? '1' : '0 0 70%')};
  display: flex;
  flex-direction: column;
  gap: ${({ isMobile }) => (isMobile ? '48px' : '32px')};
`;

export const RightColumn = styled.div`
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.p<{ isMobile: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
  padding: ${({ isMobile }) => (isMobile ? '16px' : '24px')};
`;

export const ErrorText = styled.p<{ isMobile: boolean }>`
  color: ${({ theme }) => theme.colors.red};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
  padding: ${({ isMobile }) => (isMobile ? '16px' : '24px')};
`;
