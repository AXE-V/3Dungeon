import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { PostModel } from './post';
import axios from '../../axios';

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

export const clearCache = createAsyncThunk('user/clearCache', async () => {
  const { data } = await axios.get('/clear-cache');
  return data;
});

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
  },
  extraReducers(builder) {
    builder.addCase(clearCache.fulfilled, () => {
      return initialState;
    });
  },
});

export const postFilterSelector = (state: RootState) => state.postFilterR;

export const { setCatalogData, setCatalogFilteredData, setCatalogPath, filterPostBy } =
  postSliceFilter.actions;
export const postFilterR = postSliceFilter.reducer;
