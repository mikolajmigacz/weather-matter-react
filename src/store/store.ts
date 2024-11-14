import { configureStore } from '@reduxjs/toolkit';

import uiReducer from './slices/uiSlice';
import userReducer from './slices/userSlice';
import weatherReducer from './slices/weatherSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
