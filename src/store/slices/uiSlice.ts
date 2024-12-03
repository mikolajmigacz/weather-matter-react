import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UIState } from '../types';

const initialState: UIState = {
  isLoading: false,
  isMobile: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsLoading, setIsMobile } = uiSlice.actions;
export default uiSlice.reducer;
