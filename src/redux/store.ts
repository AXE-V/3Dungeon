import { configureStore } from '@reduxjs/toolkit';
import {inputReducer} from './slices/visual/input'
import {signReducer} from './slices/visual/sign'
import {authReducer} from './slices/data/auth'
const store = configureStore({
  reducer: {
    inputReducer,
    signReducer,
    authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
export default store;
