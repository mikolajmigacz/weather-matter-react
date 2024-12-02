import styled from 'styled-components';

export const WeatherContainer = styled.div`
  height: 200px;
  padding: 32px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TemperatureWrapper = styled.div`
  margin-top: 36px;
`;

export const FeelsLikeWrapper = styled.div`
  color: ${({ theme }) => theme.colors.teal};
  font-size: 16px;
`;
