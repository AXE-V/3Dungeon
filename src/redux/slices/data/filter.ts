import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
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
