import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '../types';

const initialState: UserState = {
  userId: null,
  login: null,
  name: null,
  favoriteCity: null,
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
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
