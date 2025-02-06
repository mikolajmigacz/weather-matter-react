import React from 'react';

import { FavoriteCityItem } from '../../components/favoriteItem/FavoriteItem';
import { FavoriteCityService } from '../../services/favoriteCities/favoriteCities.service';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeFavoriteCity } from '../../store/slices/userSlice';

import { MainContainer, Title } from './FavoriteCities.styles';

export const FavoriteCitiesPage: React.FC = () => {
  const userId = useAppSelector((state) => state.user.userId);
  const isMobile = useAppSelector((state) => state.ui.isMobile);
  const favoriteCities = useAppSelector((state) => state.user.favoriteCities);
  const dispatch = useAppDispatch();

  const handleDelete = async (cityKey: string) => {
    try {
      await FavoriteCityService.removeFavoriteCity(userId || '', cityKey);
      dispatch(removeFavoriteCity(cityKey));
    } catch (error) {
      console.error('Error removing favorite city:', error);
    }
  };

  return (
    <MainContainer isMobile={isMobile}>
      <Title isMobile={isMobile}>Ulubione Miasta</Title>
      {favoriteCities.map((favoriteCity) => (
        <FavoriteCityItem
          key={favoriteCity.key}
          selectedCity={favoriteCity}
          onDelete={() => handleDelete(favoriteCity.key)}
        />
      ))}
    </MainContainer>
  );
};
