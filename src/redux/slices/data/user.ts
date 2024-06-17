import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase';
import { RootState } from '../../store';
import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';
import axios from '../../axios';
const initialState: Tables<'users'> = {
  about: '',
  created_at: '',
  id: '',
  image: '',
  links: '',
  location: '',
  login: '',
  skills: [],
};

export const clearCache = createAsyncThunk('user/clearCache', async () => {
  const { data } = await axios.get('/clear-cache');
  return data;
});

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
export const userR = userSlice.reducer;
