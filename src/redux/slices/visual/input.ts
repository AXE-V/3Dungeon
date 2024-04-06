import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { InputStorage } from "../../../interfaces/InputStorage";

const initialState: InputStorage = {
  _id: -1,
  _idParent: -1,
  focus: false,
  canSee: true
} 

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setFocus: (state, action) => {
      state._id = action.payload._id,
      state._idParent = action.payload._idParent
      state.focus = action.payload.focus
    },
    setSee: (state, action) => {
      state._id = action.payload._id,
      state._idParent = action.payload._idParent
      state.canSee = action.payload.canSee
    }
  }
})

export const inputState = (state: RootState) => state.inputReducer

export const {setFocus, setSee} = inputSlice.actions
export const inputReducer = inputSlice.reducer