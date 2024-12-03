import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main<{ showDrawer: boolean; isMobile: boolean }>`
  flex: 1;
  margin-left: ${({ showDrawer, isMobile }) => (showDrawer && !isMobile ? '350px' : '0')};
`;
