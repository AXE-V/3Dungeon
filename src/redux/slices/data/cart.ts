// import {
//   PayloadAction,
//   createAsyncThunk,
//   createEntityAdapter,
//   createSlice,
// } from '@reduxjs/toolkit';
// import { RootState } from '../../store';
// import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';
// import { supabase } from '../../../supabase';
// import { produce } from 'immer';

// type InitialState = {
//   id: string;
//   posts: Tables<'models'>[];
//   total: number;
// };
// const initialState: InitialState = {
//   posts: [],
//   total: 0,
// };

// export const createCollection = createAsyncThunk(
//   'cart/createCollection',
//   async (props: Tables<'collections'>[]) => {
//     const { data, error } = await supabase.from('collections').insert(props);
//     if (error) throw error;
//     return data;
//   },
// );

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     setCartID: (state, { payload }) => {
//       state.id = payload;
//     },
//     addCartItem: (state, { payload }) => {
//       const existingItem = state.posts.find((item) => item.id === payload.id);
//       if (!existingItem) {
//         return { ...state, posts: [...state.posts, payload], total: state.posts.length + 1 };
//       }
//       return state;
//     },
//     deleteCartItem: (state, { payload }) => {
//       state.posts = state.posts.filter(({ id }) => id !== payload.id);
//       state.total = state.posts.length;
//     },
//   },
// });

// export const cartSelector = (state: RootState) => state.cartR;
// export const { addCartItem, deleteCartItem, setCartID } = cartSlice.actions;
// export const cartR = cartSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';
import { supabase } from '../../../supabase';

type InitialState = {
  total: number;
  id: string;
  creator_id: string;
  posts: Tables<'models'>[];
};

const initialState: InitialState = {
  total: 0,
  id: '',
  creator_id: '',
  posts: [],
};

export const createCollection = createAsyncThunk(
  'cart/createCollection',
  async (props: Tables<'collections'>[]) => {
    const { data, error } = await supabase.from('collections').insert(props).select();
    if (error) throw error;
    return data;
  },
);
// export const createCollection = createAsyncThunk(
//   'cart/createCollection',
//   async (props: InitialState[]) => {
//     // const { data, error } = await supabase.from('collections').insert(props);
//     // if (error) throw error;
//     // return data;
//   },
// );

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartID: (state, { payload: id }) => {
      return { ...state, id };
    },
    setCartCreatorID: (state, { payload: creator_id }) => {
      return { ...state, creator_id };
    },
    addCartItem: (state, { payload }) => {
      state.posts;
      const existingItem = state.posts.find((item) => item.id === payload.id);
      if (!existingItem) {
        return { ...state, posts: [...state.posts, payload], total: state.posts.length + 1 };
      }
      return state;
    },
    deleteCartItem: (state, { payload }) => {
      state.posts = state.posts.filter(({ id }) => id !== payload.id);
      state.total = state.posts.length;
    },

    // setCartID: (state, { payload: id }) => {
    //   return {...state, data: [...state.data, id]}
    // },
    // addCartItem: (state, { payload }) => {
    //   const existingItem = state.data.find((item) => item.id === payload.id);
    //   if (!existingItem) {
    //     return { ...state, data: [...state.data, payload], total: state.data.length + 1 };
    //   }
    //   return state;
    // },
    // deleteCartItem: (state, { payload }) => {
    //   state.data = state.data.filter(({ id }) => id !== payload.id);
    //   state.total = state.data.length;
    // },
  },
});

export const cartSelector = (state: RootState) => state.cartR;
export const { addCartItem, deleteCartItem, setCartID } = cartSlice.actions;
export const cartR = cartSlice.reducer;
