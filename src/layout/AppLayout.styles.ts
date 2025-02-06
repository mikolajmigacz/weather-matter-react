import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main<{ showdrawer: boolean; isMobile: boolean }>`
  flex: 1;
  margin-left: ${({ showdrawer, isMobile }) => (showdrawer && !isMobile ? '350px' : '0')};
  width: 100%;
`;
