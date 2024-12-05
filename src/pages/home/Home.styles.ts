import styled from 'styled-components';

import { AppColors } from '../../constants';

export const Container = styled.div<{ isMobile: boolean }>`
  padding: ${({ isMobile }) => (isMobile ? '64px 32px 32px 32px' : '64px')};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: ${({ isMobile }) => (isMobile ? '48px' : '96px')};
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
