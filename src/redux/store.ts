import { configureStore } from '@reduxjs/toolkit';
// import additionalMiddleware from 'additional-middleware';
// import logger from 'redux-logger';
// // @ts-ignore
// import untypedMiddleware from 'untyped-middleware';
// import rootReducer from './rootReducer';

// export type RootState = ReturnType<typeof rootReducer>;
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .prepend(
//         // correctly typed middlewares can just be used
//         additionalMiddleware,
//         // you can also type middlewares manually
//         untypedMiddleware as Middleware<
//           (action: Action<'specialAction'>) => number,
//           RootState
//         >,
//       )
//       // prepend and concat calls can be chained
//       .concat(logger),
// });

// export type AppDispatch = typeof store.dispatch;

// export default store;
// reducer: rootReducer,

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

import { globalReducer } from './global/GlobalSlice.js';

const persistGlobalConfig = {
  key: 'global',
  storage,
  whitelist: [],
};

const persistedGlobal = persistReducer(persistGlobalConfig, globalReducer);

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
export type RootState = ReturnType<typeof store.getState>
export default store;
