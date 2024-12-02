import { List, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import weatherImage from '../../../assets/images/logo.svg';
import { ROUTES } from '../../../constants';
import { useAuth } from '../../../contexts';
import { useAppSelector } from '../../../store/hooks';

import {
  DrawerHeader,
  LogoutButton,
  NavItem,
  StyledDrawer,
  WeatherImage,
} from './AppDrawer.styles';

const navItems = [
  { title: 'Home', route: ROUTES.HOME },
  { title: 'Ulubione miasta', route: ROUTES.FAVORITE_CITIES },
  { title: 'Miasta', route: ROUTES.CITIES },
  { title: 'Mapa', route: ROUTES.MAP },
];

export const AppDrawer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const userData = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    await logout();
    navigate(ROUTES.AUTH);
  };

  return (
    <StyledDrawer variant="permanent">
      <DrawerHeader>
        <WeatherImage src={weatherImage} alt="Weather" />
        <Typography variant="h6">Cześć {userData.name} 👋</Typography>
      </DrawerHeader>
      <List>
        {navItems.map(({ title, route }) => (
          <NavItem
            key={route}
            $isActive={location.pathname === route}
            onClick={() => navigate(route)}
          >
            {title}
          </NavItem>
        ))}
        <LogoutButton onClick={handleLogout}>Wyloguj się</LogoutButton>
      </List>
    </StyledDrawer>
  );
};
