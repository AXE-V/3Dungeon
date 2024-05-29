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
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export const persistor = persistStore(store);

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export default store;

// // 4
// // Component1.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { updateComponent1Data } from './component1Reducer';

// const Component1 = () => {
//   const dispatch = useDispatch();

//   const handleDataChange = (newData) => {
//     dispatch(updateComponent1Data(newData));
//   };

//   return (
//     <div>
//       {/* ваш код для Component1 */}
//       <button onClick={() => handleDataChange({ foo: 'bar' })}>
//         Обновить данные
//       </button>
//     </div>
//   );
// };

// // 5
// // DataCollector.js
// import React from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// const DataCollector = () => {
//   const data = useSelector((state) => state);

//   const handleSaveData = async () => {
//     try {
//       const response = await axios.post('https://your-supabase-url.com/api/insert', data);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleSaveData}>Сохранить данные в БД</button>
//     </div>
//   );
// };

// // 6
// // App.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './App';

// const AppContainer = () => {
//   const initialState = localStorage.getItem('appState');
//   if (initialState) {
//     store.dispatch({ type: 'INIT_APP_STATE', payload: JSON.parse(initialState) });
//   }

//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };
