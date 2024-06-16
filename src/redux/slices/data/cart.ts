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
    clearCart: () => {
      return initialState;
    },
  },
});

export const cartSelector = (state: RootState) => state.cartR;
export const { addCartItem, deleteCartItem, setCartID, clearCart } = cartSlice.actions;
export const cartR = cartSlice.reducer;
