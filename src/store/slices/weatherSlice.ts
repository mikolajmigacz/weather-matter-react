import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrentConditions } from '../../services/currentConditions';
import { WeatherState } from '../types';

const initialState: WeatherState = {
  favoriteCityCurrentConditions: null,
  selectedCityCurrentConditions: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setFavoriteCityCurrentConditions: (state, action: PayloadAction<CurrentConditions>) => {
      state.favoriteCityCurrentConditions = action.payload;
    },
    setSelectedCityCurrentConditions: (state, action: PayloadAction<CurrentConditions>) => {
      state.selectedCityCurrentConditions = action.payload;
    },
    clearWeatherData: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setFavoriteCityCurrentConditions,
  setSelectedCityCurrentConditions,
  clearWeatherData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
