import styled from 'styled-components';

export const ScreenContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkestGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const WeatherImage = styled.img`
  width: 400px;
  height: 400px;
  margin-bottom: 20px;
`;
