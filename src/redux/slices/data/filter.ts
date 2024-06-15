import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { supabase } from '../../../supabase';
import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';

const initialState: Tables<'models'>[] = [];

type FilterPostBy = {
  filterBy: 'category' | 'format' | 'license' | 'rating' | 'date' | 'view_count';
  filterValue: string;
};
export const filterPostBy = createAsyncThunk(
  'post-model/filterPostBy',
  async ({ filterBy, filterValue }: FilterPostBy) => {
    const { data, error } = await supabase.from('models').select().eq(filterBy, filterValue);
    if (error) throw error;
    return data;
  },
);

const postSliceFilter = createSlice({
  name: 'post-model-filter',
  initialState,
  reducers: {},

  extraReducers: (builder) => {},
});

export const postFilterSelector = (state: RootState) => state.postFilterR;
export const postSelectorFormat = (state: RootState) => state.postFilterR;
export const postSelectorZipName = (state: RootState) => state.postFilterR;
export const {} = postSliceFilter.actions;
export const postFilterR = postSliceFilter.reducer;
