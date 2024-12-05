import styled from 'styled-components';

import { AppColors } from '../../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${AppColors.darkGray};
  border-radius: 36px;
  background-color: ${AppColors.darkGray};
  padding: 24px;
  gap: 16px;
`;

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-left: 24px;
  padding-right: 24px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 1px;
    background-color: ${AppColors.teal};
  }
`;
