import styled from 'styled-components';

import { AppColors } from '../../../constants';

export const InfoContainer = styled.div<{ isMobile: boolean }>`
  position: relative;
  background-color: ${AppColors.darkGray};
  border-radius: 36px;
  padding: ${({ isMobile }) => (isMobile ? '12px 36px' : '36px 84px')};
  display: grid;
  grid-template-areas:
    'topLeft topRight'
    'bottomLeft bottomRight';
  grid-gap: ${({ isMobile }) => (isMobile ? '12px' : '48px')};
`;

export const TopLeft = styled.div`
  grid-area: topLeft;
`;

export const TopRight = styled.div`
  grid-area: topRight;
  display: flex;
  justify-content: flex-end;
`;

export const BottomLeft = styled.div`
  grid-area: bottomLeft;
`;

export const BottomRight = styled.div`
  grid-area: bottomRight;
  display: flex;
  justify-content: flex-end;
`;
