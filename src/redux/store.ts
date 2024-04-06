import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import {inputReducer} from './slices/visual/input'
import {signReducer} from './slices/visual/sign'
import {userReducer} from './slices/data/user'


const store = configureStore({
  reducer: {
    inputReducer,
    signReducer,
    userReducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware({
  //     thunk: {

  //     }
  //   })
  // }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
export default store;
