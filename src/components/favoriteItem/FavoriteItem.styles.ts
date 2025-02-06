import styled from 'styled-components';

import { AppColors, FontSizes } from '../../constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${AppColors.darkGray};
  padding: 12px 24px;
  margin: 6px 0;
  border-radius: 8px;
`;

export const CityImage = styled.img<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? 40 : 50)}px;
  height: ${({ isMobile }) => (isMobile ? 30 : 40)}px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const TextContainer = styled.div`
  flex: 1;
  margin-left: 12px;
  color: ${AppColors.lightestGray};
`;

export const CityName = styled.div<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? FontSizes.h6.mobile : FontSizes.h6.web)}px;
  font-weight: bold;
`;

export const RegionCountry = styled.div<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? FontSizes.body.mobile : FontSizes.body.web)}px;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Location = styled.div<{ isMobile: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? FontSizes.small.mobile : FontSizes.small.web)}px;
  font-size: ${FontSizes.small.mobile}px;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.4);
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${AppColors.teal};
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: ${AppColors.darkGray};
  padding: 26px;
  border-radius: 8px;
  width: 400px;
  color: ${AppColors.lightestGray};
  text-align: left;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 12px;
  font-size: ${FontSizes.h6}px;
`;

export const ModalText = styled.p`
  margin-bottom: 20px;
  font-size: ${FontSizes.body}px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

export const ModalButton = styled.button<{ color?: string }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${FontSizes.body.mobile}px;
  color: ${({ color }) => color || AppColors.darkGray};
  background-color: ${AppColors.darkGray};
  &:hover {
    opacity: 0.8;
  }
`;
