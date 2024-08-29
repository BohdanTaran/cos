import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './burger/burgerSlice';
import mediaQueryReducer from './mediaQuery/mediaQuerySlice';

export const store = configureStore({
  reducer: {
    mediaQuery: mediaQueryReducer,
    burger: burgerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
