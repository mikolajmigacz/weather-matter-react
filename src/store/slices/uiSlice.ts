import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UIState } from '../types';

const initialState: UIState = {
  isLoading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = uiSlice.actions;
export default uiSlice.reducer;
