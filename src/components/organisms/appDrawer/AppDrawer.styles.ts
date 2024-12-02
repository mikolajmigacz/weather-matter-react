import { Box, Drawer, ListItem } from '@mui/material';
import styled from 'styled-components';

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    position: relative;
    width: 350px;
    background-color: ${({ theme }) => theme.colors.darkGray};
    color: ${({ theme }) => theme.colors.lightestGray};
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const DrawerHeader = styled(Box)`
  height: 40vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WeatherImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
`;

export const NavItem = styled(ListItem)<{ $isActive: boolean }>`
  padding: 12px 16px;
  background-color: ${({ $isActive }) => ($isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  cursor: pointer;
`;

export const LogoutButton = styled.div`
  margin: 16px 16px;
  padding: 12px 12px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.lightestGray};
  border-radius: 8px;
  text-transform: none;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
    opacity: 0.9;
  }
`;
