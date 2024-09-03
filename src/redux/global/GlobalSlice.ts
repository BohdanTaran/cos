import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
});
export const globalSliceReducer = globalSlice.reducer;
