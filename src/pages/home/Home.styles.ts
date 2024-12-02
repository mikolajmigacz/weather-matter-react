import styled from 'styled-components';

import { AppColors } from '../../constants';

export const Container = styled.div`
  padding: 64px;
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
`;

export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
  padding: 24px;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  background-color: ${AppColors.darkestGray};
  min-height: 100vh;
  padding: 24px;
`;
