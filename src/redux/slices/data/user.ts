import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../../supabase';
import { AuthError, Session } from '@supabase/supabase-js';
import { RootState } from '../../store';

type UserFields = {
  image?: string;
  skills?: string[];
  links?: Link[];
  location?: string;
  about?: string;
  likes?: {};
  login: string;
};
type Link = { name: string; url: string };

export interface UserData {
  data: UserFields;
  session: Session | null;
  error: AuthError | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: UserData = {
  data: {
    image: '',
    skills: [],
    links: [],
    location: '',
    about: '',
    likes: {},
    login: 'user',
  },
  session: null,
  error: null,
  status: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const userSelector = (state: RootState) => state.userR;
export const userR = userSlice.reducer;
