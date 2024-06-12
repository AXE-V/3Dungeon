import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { inputR } from './slices/visual/input';
import { signR } from './slices/visual/sign';
import { userR } from './slices/data/user';
import { postR } from './slices/data/post';
// import localStorageMiddleware from './middleware/localStorage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  // визуал
  inputR,
  signR,
  // данные
  userR,
  postR,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // reducer: rootReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;
