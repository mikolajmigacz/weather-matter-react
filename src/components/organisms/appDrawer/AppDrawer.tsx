import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, List, Typography } from '@mui/material';
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
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const userData = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    await logout();
    navigate(ROUTES.AUTH);
  };

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: 'fixed',
            top: 16,
            left: 16,
            color: 'white',
            backgroundColor: 'transparent',
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <StyledDrawer
        isMobile={isMobile}
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
      >
        <DrawerHeader>
          <WeatherImage src={weatherImage} alt="Weather" />
          <Typography variant="h6">Cześć {userData.name} 👋</Typography>
        </DrawerHeader>
        <List>
          {navItems.map(({ title, route }) => (
            <NavItem
              key={route}
              $isActive={location.pathname === route}
              onClick={() => {
                navigate(route);
                if (isMobile) setOpen(false);
              }}
            >
              {title}
            </NavItem>
          ))}
          <LogoutButton onClick={handleLogout}>Wyloguj się</LogoutButton>
        </List>
      </StyledDrawer>
    </>
  );
};
