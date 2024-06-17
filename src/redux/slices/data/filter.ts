// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { RootState } from '../../store';
// import { supabase } from '../../../supabase';
// import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';

// const initialState: Tables<'models'>[] = [];

// type FilterPostBy = {
//   filterBy: 'category' | 'format' | 'license' | 'rating' | 'date' | 'view_count';
//   filterValue: string;
// };
// export const filterPostBy = createAsyncThunk(
//   'filter/filterPostBy',
//   async ({ filterBy, filterValue }: FilterPostBy) => {
//     const { data, error } = await supabase.from('models').select().eq(filterBy, filterValue);
//     if (error) throw error;
//     return data;
//   },
// );

// const postSliceFilter = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {},
// });

// export const postFilterSelector = (state: RootState) => state.postFilterR;
// export const postSelectorFormat = (state: RootState) => state.postFilterR;
// export const postSelectorZipName = (state: RootState) => state.postFilterR;
// export const {} = postSliceFilter.actions;
// export const postFilterR = postSliceFilter.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { supabase } from '../../../supabase';
import { Tables } from '../../../interfaces/DatabaseGeneratedTypes';
import { PostModel } from './post';

type InitialState = {
  catalogData: PostModel[];
  filteredCatalogData: PostModel[];
  catalogPath: string;
};
const initialState: InitialState = {
  catalogData: [],
  filteredCatalogData: [],
  catalogPath: '',
};

const postSliceFilter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCatalogData: (state, { payload }) => {
      return { ...state, catalogData: payload };
    },
    setCatalogFilteredData: (state, { payload }) => {
      return { ...state, filteredCatalogData: payload };
    },
    setCatalogPath: (state, { payload }) => {
      state.catalogPath = payload;
    },
    filterPostBy: (state, { payload }) => {
      state.filteredCatalogData = payload;
    },
    clearCatalogData: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {},
});

export const postFilterSelector = (state: RootState) => state.postFilterR;

export const {
  setCatalogData,
  setCatalogFilteredData,
  setCatalogPath,
  filterPostBy,
  clearCatalogData,
} = postSliceFilter.actions;
export const postFilterR = postSliceFilter.reducer;
