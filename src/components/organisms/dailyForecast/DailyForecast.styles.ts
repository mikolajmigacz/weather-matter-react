import styled from 'styled-components';

import { AppColors } from '../../../constants';
import { FontSizes } from '../../../constants/fontSizes';

export const Wrapper = styled.div<{ isMobile: boolean }>`
  background-color: ${AppColors.darkGray};
  border-radius: 36px;
  padding: ${({ isMobile }) => (isMobile ? '16px' : '50px 24px')};
  color: ${AppColors.lightestGray};
  width: ${({ isMobile }) => (isMobile ? '100%' : '80%')};
`;

export const Title = styled.h3<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? `${FontSizes.h3.mobile}px` : `${FontSizes.h3.web}px`)};
  text-align: center;
  margin-bottom: 16px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItemWrapper = styled.div<{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  border-bottom: ${({ isLast }) => (isLast ? 'none' : `1px solid ${AppColors.teal}`)};
`;
