import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase';
import { RootState } from '../../store';
import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';

type Additional = {
  cacheCleared: boolean;
};
const initialState: Tables<'users'> & Additional = {
  about: '',
  created_at: '',
  id: '',
  image: '',
  links: '',
  location: '',
  login: '',
  skills: [],
  cacheCleared: false,
};

export const getUserDataByID = createAsyncThunk('user/getUserDataByID', async (uid: string) => {
  const { data, error } = await supabase.from('users').select().eq('id', uid).limit(1).single();
  if (error) throw error;
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userSelector = (state: RootState) => state.userR;
export const userSelectorCache = (state: RootState) => state.userR.cacheCleared;
export const userR = userSlice.reducer;
