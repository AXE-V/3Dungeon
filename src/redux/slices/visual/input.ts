import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IInput } from '../../../interfaces/IInput';

const initialState: IInput = {
  _id: -1,
  _idParent: -1,
  focus: false,
  canSee: true,
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setFocus: (state, action) => {
      (state._id = action.payload._id), (state._idParent = action.payload._idParent);
      state.focus = action.payload.focus;
    },
    setSee: (state, action) => {
      (state._id = action.payload._id), (state._idParent = action.payload._idParent);
      state.canSee = action.payload.canSee;
    },
  },
});

export const inputSelector = (state: RootState) => state.inputR;

export const { setFocus, setSee } = inputSlice.actions;
export const inputR = inputSlice.reducer;
