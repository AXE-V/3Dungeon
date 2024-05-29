import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
  _id: -1,
};

const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setActiveSign: (state, action) => {
      state._id = action.payload._id;
    },
  },
});

export const signSelector = (state: RootState) => state.signR;

export const { setActiveSign } = signSlice.actions;
export const signR = signSlice.reducer;
