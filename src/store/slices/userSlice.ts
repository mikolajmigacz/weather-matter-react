import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CityDetails } from '../../services/cityInfo/cityInfo.types';
import { UserState } from '../types';

const initialState: UserState = {
  userId: null,
  login: null,
  name: null,
  favoriteCity: null,
  favoriteCities: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    clearUserData: (state) => {
      Object.assign(state, initialState);
    },
    setFavoriteCities: (state, action: PayloadAction<CityDetails[]>) => {
      state.favoriteCities = action.payload;
    },
    addFavoriteCity: (state, action: PayloadAction<CityDetails>) => {
      if (!state.favoriteCities.find((city: CityDetails) => city.key === action.payload.key)) {
        state.favoriteCities.push(action.payload);
      }
    },
    removeFavoriteCity: (state, action: PayloadAction<string>) => {
      state.favoriteCities = state.favoriteCities.filter(
        (city: CityDetails) => city.key !== action.payload
      );
    },
  },
});

export const {
  setUserData,
  clearUserData,
  setFavoriteCities,
  addFavoriteCity,
  removeFavoriteCity,
} = userSlice.actions;
export default userSlice.reducer;
