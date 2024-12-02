import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import weatherImage from '../../assets/images/weather.png';
import { AuthForm } from '../../components/molecules/authForm/AuthForm';
import { AuthFormData } from '../../components/molecules/authForm/AuthForm.types';
import { useAuth } from '../../contexts';
import { UserService } from '../../services/user/user.service';
import { useAppDispatch } from '../../store/hooks';
import { setUserData } from '../../store/slices/userSlice';

import { ScreenContainer, WeatherImage } from './Auth.styles';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data: AuthFormData) => {
    try {
      if (isLogin) {
        await login(data.email, data.password);
        const userId = UserService.getCurrentUserId();
        if (userId) {
          const userData = await UserService.getUserData(userId);
          if (userData) {
            dispatch(setUserData(userData));
          }
        }
      } else {
        await register(data.email, data.password);
        const userId = UserService.getCurrentUserId();
        if (userId) {
          const userData = {
            userId,
            login: data.email,
            name: data.name || '',
            favoriteCity: data.favoriteCity || '',
          };
          await UserService.saveUser(userData);
          dispatch(setUserData(userData));
        }
      }
      navigate('/home');
    } catch (error) {
      console.error('Auth error:', error);
    }
  };

  return (
    <ScreenContainer>
      <WeatherImage src={weatherImage} alt="Weather illustration" />
      <AuthForm
        isLogin={isLogin}
        onSubmit={handleSubmit}
        onToggleMode={() => setIsLogin(!isLogin)}
      />
    </ScreenContainer>
  );
};
