import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase';
import { AuthError, Session } from '@supabase/supabase-js';
import { RootState } from '../../store';
import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';

const initialState: Tables<'users'> = {
  about: '',
  image: '',
  links: [],
  location: '',
  skills: [],
};

export const getUserDataByID = createAsyncThunk('user/getUserDataByID', async (userId: string) => {
  const { data, error } = await supabase.from('users').select().eq('id', userId).limit(1).single();
  if (error) throw error;
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const userSelector = (state: RootState) => state.userR;
export const userR = userSlice.reducer;
