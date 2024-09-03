import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { globalSliceReducer } from './global/GlobalSlice.ts';

const persistGlobalConfig = {
  key: 'global',
  storage,
  whitelist: [],
};

const persistedGlobal = persistReducer(persistGlobalConfig, globalSliceReducer);

const store = configureStore({
  reducer: {
    global: persistedGlobal,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);

export default store;
